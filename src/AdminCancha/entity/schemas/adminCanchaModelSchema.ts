import { Schema } from 'mongoose';
import { AdminCancha } from '../types/AdminCanchaModel';

export const adminCanchaSchema = new Schema<AdminCancha>(
  {
    dni: { type: String, required: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true, unique: true },
    nacimiento: { type: Date, required: true, unique: true },
    sexo: { type: String, required: true, unique: true },
    telefono: { type: Number, required: true },
    avatar: { type: String },
    correo: { type: String, required: true },
    contraseña: { type: String, required: true },
    isValid: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
