import { Types } from 'mongoose';

export interface Canchero {
  id: CancheroId;
  dni: number;
  firstName: string;
  lastName: string;
  birthdate: Date;
  gender: string;
  phone: number;
  avatar: string;
  email: string;
  password: string;
  companyName: string;
  companyDescription: string;
  location: string;
  isValid: boolean;
}

export type CancheroId = {
  _id: Types.ObjectId;
};

export type CreateCanchero = Omit<Canchero, 'isValid'>;

export type LoginCanchero = {
  correo: string;
  password: string;
};
