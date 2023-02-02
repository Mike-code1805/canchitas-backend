import { Schema } from 'mongoose';
import { Cancha } from './cancha';

export const canchaSchema = new Schema<Cancha>(
  {
    image: { type: String },
    nombre: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    ubicacion: { type: String, required: true },
    estado: { type: String, required: true },
    cantAparcamiento: { type: Number },
    calificacion: { type: Number, default: 4.5 },
    isValid: { type: Boolean, default: true },
    precioHora: { type: Number, required: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'Canchero',
      required: [true, 'an canchero is required to create a cancha'],
    },
  },
  {
    timestamps: true,
  }
);
