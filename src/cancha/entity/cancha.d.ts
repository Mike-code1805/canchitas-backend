import { Types } from 'mongoose';
import { CancheroId } from '../../canchero/entity/canchero';

export interface Cancha {
  id: CanchaId;
  image: string;
  nombre: string;
  description: string;
  ubicacion: string;
  estado: string;
  cantAparcamiento: Number;
  calificacion: Number;
  isValid: boolean;
  precioHora: number;
  owner: CancheroId;
}

export type CanchaId = {
  _id: Types.ObjectId;
};

export type CreateCancha = Omit<Cancha, 'isValid' | 'calificacion'>;
