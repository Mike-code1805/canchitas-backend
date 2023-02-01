import { Cancha } from '../../cancha/entity/cancha';
import { CanchaModel } from '../../cancha/entity/CanchaModel';
import { updateOneResourceById } from '../../shared/factory';
import Logger from '../../shared/logger/appLogger';

export const updateCanchaService = async (
  canchaId: string,
  cancha: { body?: string }
): Promise<Cancha | null | undefined> => {
  try {
    if (!canchaId) throw new Error(`No Cancha id provided`);
    const editedCancha = await updateOneResourceById(CanchaModel)(
      canchaId,
      cancha
    );
    if (!editedCancha) throw new Error('cancha not found');
    return editedCancha;
  } catch (error: any) {
    Logger.error(`error uddating Cancha with id ${canchaId}`, {
      service: 'updateCanchaService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
