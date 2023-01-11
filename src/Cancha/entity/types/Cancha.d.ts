import { Types } from 'mongoose';
import { UserIdType } from '../../../user/entity/types/User';

// import { UserIdType } from "../Server/src/users/entity/types/User";

export interface Cancha {
  id: CanchaId;
  ubicacion: string;
  direccion: string;
  estado: string;
  cantidadAparca: number;
  imagen: string[];
  clasificacion: number;
}

export type CanchaId = {
  _id: Types.ObjectId;
};

export type CreateCancha = Omit<Cancha, 'id' | 'created_at' | 'updated_at'>;
