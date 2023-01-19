import { Types } from 'mongoose';
import { UserIdType } from '../../../user/entity/types/User';

export interface AdminCancha {
  dni: AdminCanchaId;
  nombres: string;
  apellidos: string;
  nacimiento: Date;
  sexo: string;
  telefono: number;
  avatar: string;
  correo: string;
  contraseña: string;
  owner: UserIdType;
  isValid: boolean;
}

export type AdminCanchaId = {
  _id: Types.ObjectId;
};

export type CreateAdminCancha = Omit<
  AdminCancha,
  'id' | 'created_at' | 'updated_at'
>;
