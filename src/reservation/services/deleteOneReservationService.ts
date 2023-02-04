import logger from '../../shared/logger/appLogger';
import { ReservationModel } from '../entity/ReservationModel';
import { deleteOneResourceById } from '../../shared/factory/deleteOneResourceById';
import { Reservation } from '../entity/reservation';
import { findOneResourceByIdWithoutPopulate } from '../../shared/factory/findOneResourceByIdWithoutPopulate';

export const deleteOneReservationService = async (
  reservationId: string,
  userId: string
): Promise<boolean> => {
  try {
    if (!reservationId) throw new Error('invalid reservation id');
    if (!userId) throw new Error('invalid user id');

    const Reservation: Reservation[] = await findOneResourceByIdWithoutPopulate(
      ReservationModel
    )(reservationId);

    if (Reservation[0].owner.toString() !== userId)
      throw new Error('Reservation not exist');

    const result = await deleteOneResourceById(ReservationModel)({
      _id: reservationId,
      owner: userId,
    });

    if (!result) throw new Error('Reservation not found');

    return result ? true : false;
  } catch (error: any) {
    logger.error(`Error deleting reservation: ${error.message}`, {
      instance: 'services',
      fn: 'deleteOneReservationService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
