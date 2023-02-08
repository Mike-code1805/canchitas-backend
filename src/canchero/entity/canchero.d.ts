import { Types } from 'mongoose';

export interface Canchero {
  id: CancheroId;
  dni: number;
  nombres: string;
  apellidos: string;
  nacimiento: Date;
  sexo: string;
  telefono: number;
  avatar: string;
  correo: string;
  password: string;
  nombreEmpresa: string;
  descriptionEmpresa: string;
  ubication: string;
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
