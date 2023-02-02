import { Types } from 'mongoose';

export interface User {
  id: UserIdType;
  nombres: string;
  sexo: string;
  avatar: string;
  correo: string;
  password: string;
  isValid: boolean;
}

export type UserIdType = {
  _id: Types.ObjectId;
};

export type CreateUser = Omit<User, 'isValid'>;

export type LoginUser = {
  correo: string;
  password: string;
};
