import crypto from 'crypto';

const generateOTP = (): string => {
  return crypto.randomBytes(3).toString('hex');
};

const otpExpiry = (): Date => {
  const expiry = new Date();
  expiry.setMinutes(expiry.getMinutes() + 10); // OTP valid for 10 minutes
  return expiry;
};

export { generateOTP, otpExpiry };
