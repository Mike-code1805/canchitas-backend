import Logger from '../../shared/logger/appLogger';
import { UserIdType } from '../../usuario/entitys/user';
import { Cancha } from '../entity/cancha';
import { CanchaModel } from '../entity/CanchaModel';

export const getAllCanchasService = async (
  userId: string | UserIdType
): Promise<Cancha[]> => {
  try {
    if (!userId) throw new Error('invalid user id');
    const canchas = await CanchaModel.find({ owner: userId }).populate('owner');
    return canchas;
  } catch (error: any) {
    Logger.error('error getting all the canchas', {
      instance: 'services',
      fn: 'getAllCanchasService',
      trace: error.message,
    });
    throw new Error(`Error getting all the canchas: ${error.message}`);
  }
};
