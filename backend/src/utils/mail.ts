import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
  };
  return transporter.sendMail(mailOptions);
};

export default sendMail;
