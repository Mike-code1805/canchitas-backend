import { Schema } from 'mongoose';
import { Canchero } from './canchero';

export const cancheroSchema = new Schema<Canchero>(
  {
    dni: { type: Number, required: true, unique: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    nacimiento: { type: Date, default: new Date() },
    sexo: { type: String, required: true },
    telefono: { type: Number, required: true },
    avatar: { type: String, default: '' },
    correo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nombreEmpresa: { type: String, required: true },
    descriptionEmpresa: { type: String, required: true },
    ubication: { type: String, required: true },
    isValid: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
