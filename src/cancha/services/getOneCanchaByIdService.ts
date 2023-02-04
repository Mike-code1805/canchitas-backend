import { CanchaModel } from '../entity/CanchaModel';
import { Cancha } from '../entity/cancha';
import { findOneResourceByIdWithoutPopulate } from '../../shared/factory';
import Logger from '../../shared/logger/appLogger';

export const getOneCanchaByIdService = async (
  id: string,
  owner: string
): Promise<Cancha | null> => {
  try {
    const cancha: Cancha[] = await findOneResourceByIdWithoutPopulate(
      CanchaModel
    )(id);

    if (cancha[0].owner.toString() !== owner) {
      throw new Error('Cancha not found');
    }

    return cancha[0];
  } catch (error: any) {
    Logger.error(`error getting Cancha with id ${id}`, {
      service: 'getOneCanchaByIdService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
