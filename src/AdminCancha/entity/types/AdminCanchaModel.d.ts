import { Types } from 'mongoose';
import { UserIdType } from '../../../user/entity/types/User';

export interface AdminCancha {
  dni: AdminCanchaId;
  nombres: string;
  apellidos: string;
  nacimiento: Date;
  created_at: Date;
  updated_at: Date | null;
  owner: UserIdType;
}

export type AdminCanchaId = {
  _id: Types.ObjectId;
};

export type CreateAdminCancha = Omit<
  AdminCancha,
  'id' | 'created_at' | 'updated_at'
>;
