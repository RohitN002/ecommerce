import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public password!: string;
  public otp?: string|null;
  public otpExpiry?: Date|null;
  public verified!: boolean;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otp: DataTypes.STRING,
  otpExpiry: DataTypes.DATE,
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'User',
});

export default User;
