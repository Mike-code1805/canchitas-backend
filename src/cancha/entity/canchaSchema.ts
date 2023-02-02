import { Schema } from 'mongoose';
import { Cancha } from './cancha';

export const canchaSchema = new Schema<Cancha>(
  {
    nombre: { type: String, required: true },
    description: { type: String, required: true },
    ubicacion: { type: String, required: true },
    estado: { type: String, required: true },
    cantAparcamiento: { type: Number },
    calificacion: { type: Number, default: 4.5 },
    isValid: { type: Boolean, default: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'Canchero',
      required: [true, 'an user is required to create a cancha'],
    },
  },
  {
    timestamps: true,
  }
);
