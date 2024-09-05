import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import sendMail from '../utils/mail';
import { generateOTP, otpExpiry } from '../utils/otp';
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const otp = generateOTP();
  const expiry = otpExpiry();

  try {
    const user = await User.create({ name, email, password: hashedPassword, otp, otpExpiry: expiry });

    // Send OTP via email
    await sendMail(user.email, 'Your OTP', `Your OTP is ${otp}`);

    // Send OTP via SMS (Optional)
    if (user.phone) {
      await client.messages.create({
        body: `Your OTP is ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER!,
        to: user.phone,
      });
    }

    res.status(201).json({ message: 'User registered. OTP sent to email and phone.' });
  } catch (error) {
    res.status(400).json({ error: 'Error creating user.' });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || user.otp !== otp || user.otpExpiry! < new Date()) {
    return res.status(400).json({ error: 'Invalid or expired OTP.' });
  }

  user.verified = true;
  user.otp = null;
  user.otpExpiry = null;
  await user.save();

  res.status(200).json({ message: 'User verified.' });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || !user.verified || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: 'Invalid credentials.' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
  res.status(200).json({ token });
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ error: 'User not found.' });
  }

  const otp = generateOTP();
  const expiry = otpExpiry();

  user.otp = otp;
  user.otpExpiry = expiry;
  await user.save();

  // Send OTP via email
  await sendMail(user.email, 'Reset Password OTP', `Your OTP is ${otp}`);

  // Send OTP via SMS (Optional)
  if (user.phone) {
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: user.phone,
    });
  }

  res.status(200).json({ message: 'OTP sent to email and phone.' });
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, otp, newPassword } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || user.otp !== otp || user.otpExpiry! < new Date()) {
    return res.status(400).json({ error: 'Invalid or expired OTP.' });
  }

  user.password = await bcrypt.hash(newPassword, 10);
  user.otp = null;
  user.otpExpiry = null;
  await user.save();

  res.status(200).json({ message: 'Password reset successfully.' });
};
