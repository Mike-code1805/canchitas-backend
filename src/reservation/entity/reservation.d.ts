import { Types } from 'mongoose';
import { CancheroId } from '../../canchero/entity/canchero';

export interface Reservation {
  id: ReservationId;
  state: string;
  start: string;
  end: string;
  toName: string;
  isValid: boolean;
  owner: CancheroId;
}

export type ReservationId = {
  _id: Types.ObjectId;
};

export type CreateReservation = Omit<Reservation, 'isValid' | 'calificacion'>;
