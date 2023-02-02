import { Types } from 'mongoose';
import { CancheroId } from '../../canchero/entity/canchero';

export interface Cancha {
  id: CanchaId;
  nombre: string;
  description: string;
  ubicacion: string;
  estado: string;
  cantAparcamiento: Number;
  calificacion: Number;
  isValid: boolean;
  owner: CancheroId;
}

export type CanchaId = {
  _id: Types.ObjectId;
};

export type CreateCancha = Omit<Cancha, 'isValid' | 'calificacion'>;
