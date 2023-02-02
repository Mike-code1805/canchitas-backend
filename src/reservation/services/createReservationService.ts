import Logger from '../../shared/logger/appLogger';
import { createResource } from '../../shared/factory/createResource';
import { CreateReservation, Reservation } from '../entity/reservation';
import { ReservationModel } from '../entity/ReservationModel';

export const createReservationService = async (
  ReservationRequest: CreateReservation
): Promise<Reservation> => {
  try {
    const Reservation = await createResource(ReservationModel)(
      ReservationRequest
    );
    return Reservation as Reservation;
  } catch (error: any) {
    Logger.error('error creating a new Reservation service', {
      instance: 'services',
      service: 'createReservationService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a new Reservation ${error.message}`);
  }
};
