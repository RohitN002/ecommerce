import express from 'express';
import { signup, verifyOtp, login, forgotPassword, resetPassword } from '../controllers/authController';

const router = express.Router();

router.post('/signup', signup);
router.post('/verify-otp', verifyOtp);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;
