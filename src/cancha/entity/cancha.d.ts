import { Types } from 'mongoose';
import { CancheroId } from '../../canchero/entity/canchero';

export interface Cancha {
  id: SportsFieldId;
  images: string[];
  name: string;
  description: string;
  location: string;
  status: string;
  parkingCapacity: number;
  rating: number;
  isValid: boolean;
  hourlyPrice: number;
  owner: FieldOwner;

  areaType: string;
  maxCapacity: number;

  services: string[]; // Ejemplo: "Locker rooms", "Cafeteria", "Night lighting"
  rules: string; // Reglas específicas de uso de la cancha
  additionalFacilities: string[]; // Ejemplo: "Gym", "Pool", "Playground"
}

export interface Cancha {
  id: CanchaId;
  image: string[];
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
