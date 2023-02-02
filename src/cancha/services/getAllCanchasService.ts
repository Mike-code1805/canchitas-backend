import Logger from '../../shared/logger/appLogger';
import { UserIdType } from '../../usuario/entitys/user';
import { Cancha } from '../entity/cancha';
import { CanchaModel } from '../entity/CanchaModel';

export const getAllCanchasService = async (): Promise<Cancha[]> => {
  try {
    const canchas = await CanchaModel.find().populate({
      path: 'owner',
      select: 'nombres avatar',
    });
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
