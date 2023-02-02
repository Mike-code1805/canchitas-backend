import { Reservation } from '../entity/reservation';
import { ReservationModel } from '../entity/ReservationModel';
import { updateOneResourceById } from '../../shared/factory';
import Logger from '../../shared/logger/appLogger';
import { findOneResourceByIdWithoutPopulate } from '../../shared/factory/findOneResourceByIdWithoutPopulate';

export const updateReservationService = async (
  ReservationId: string,
  Reservation: any
): Promise<Reservation | null | undefined> => {
  try {
    if (!ReservationId) throw new Error(`No Reservation id provided`);
    const can: Reservation[] = await findOneResourceByIdWithoutPopulate(ReservationModel)(
      ReservationId
    );

    if (can[0].owner.toString() !== Reservation.user.id)
      throw new Error('Reservation not exist');
    const editedReservation = await updateOneResourceById(ReservationModel)(
      ReservationId,
      Reservation
    );
    if (!editedReservation) throw new Error('Reservation not found');
    return editedReservation;
  } catch (error: any) {
    Logger.error(`error uddating Reservation with id ${ReservationId}`, {
      service: 'updateReservationService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
