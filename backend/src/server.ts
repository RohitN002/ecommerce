import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import sequelize from './config/db';
import User from './models/user';

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Sync Database
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}).catch(err => console.error('Error: ' + err));
