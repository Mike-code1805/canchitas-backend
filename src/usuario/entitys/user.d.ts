import { Types } from 'mongoose';

export interface User {
  id: UserIdType;
  name: string;
  gender: string;
  avatar: string;
  email: string;
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
