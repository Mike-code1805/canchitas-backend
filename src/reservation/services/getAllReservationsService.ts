import Logger from '../../shared/logger/appLogger';
import { UserIdType } from '../../usuario/entitys/user';
import { Reservation } from '../entity/reservation';
import { ReservationModel } from '../entity/ReservationModel';

export const getAllReservationsService = async (
  userId: string | UserIdType
): Promise<Reservation[]> => {
  try {
    //const reservations: Project[] = await findAllResources(ProjectModel)({});
    if (!userId) throw new Error('invalid user id');
    const reservations = await ReservationModel.find({ owner: userId });
    return reservations;
  } catch (error: any) {
    Logger.error('error getting all the reservations', {
      instance: 'services',
      fn: 'getAllReservationsService',
      trace: error.message,
    });
    throw new Error(`Error getting all the Reservations: ${error.message}`);
  }
};
