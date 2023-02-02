import { model } from 'mongoose';
import { Reservation } from './reservation';
import { ReservationSchema } from './reservationSchema';

export const ReservationModel = model<Reservation>(
  'Reservation',
  ReservationSchema
);
