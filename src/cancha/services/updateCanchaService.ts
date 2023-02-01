import { Cancha } from '../../cancha/entity/cancha';
import { CanchaModel } from '../../cancha/entity/CanchaModel';
import { updateOneResourceById } from '../../shared/factory';
import Logger from '../../shared/logger/appLogger';
import { findOneResourceByIdWithoutPopulate } from '../../shared/factory/findOneResourceByIdWithoutPopulate';

export const updateCanchaService = async (
  canchaId: string,
  cancha: any
): Promise<Cancha | null | undefined> => {
  try {
    if (!canchaId) throw new Error(`No Cancha id provided`);
    const can: Cancha[] = await findOneResourceByIdWithoutPopulate(CanchaModel)(
      canchaId
    );

    if (can[0].owner.toString() !== cancha.user.id)
      throw new Error('Cancha not exist');
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
