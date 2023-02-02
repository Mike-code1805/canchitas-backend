import mongoose from 'mongoose';
import { User } from './user';

const Schema = mongoose.Schema;

export const userSchema = new Schema<User>(
  {
    nombres: {
      type: String,
      required: true,
    },
    sexo: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    correo: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
