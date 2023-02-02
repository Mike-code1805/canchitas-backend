import { ReservationModel } from '../entity/ReservationModel';
import { Reservation } from '../entity/reservation';
import { findOneResourceByIdWithoutPopulate } from '../../shared/factory';
import Logger from '../../shared/logger/appLogger';

export const getOneReservationByIdService = async (
  id: string,
  owner: string
): Promise<Reservation | null> => {
  try {
    const Reservation: Reservation[] = await findOneResourceByIdWithoutPopulate(
      ReservationModel
    )(id);

    if (Reservation[0].owner.toString() !== owner) {
      console.log('Im here');
      throw new Error('Reservation not found');
    }

    return Reservation[0];
  } catch (error: any) {
    Logger.error(`error getting Reservation with id ${id}`, {
      service: 'getOneReservationByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
