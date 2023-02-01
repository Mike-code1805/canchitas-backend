import { Cancha } from '../../cancha/entity/cancha';
import logger from '../../shared/logger/appLogger';
// import { findOneResourceByField } from '../../shared/factory/findOneResourceByField';
// import { updateOneResourceById } from '../../shared/factory/updateOneResourceById';

// import { CanchaModel } from '../entity/models/CanchaModel';
// import { Cancha } from '../entity/types/Cancha';

export const editOneCanchaService = async (
  CanchaId: string,
  userId: string,
  Cancha: { title?: string; description?: string }
): Promise<Cancha | null> => {
  try {
    const exists = await findOneResourceByField(CanchaModel)({
      owner: userId,
    });

    if (!exists) throw new Error('the user cannot delete this proyect');
    const editedCancha = await updateOneResourceById(CanchaModel)(
      CanchaId,
      Cancha
    );

    return editedCancha;
  } catch (error: any) {
    logger.error(`error updating the Cancha with id ${CanchaId}`, {
      instance: 'services',
      fn: ';editOneCanchaService',
      trace: error.message,
    });
    throw new Error(`error updating the Cancha with id ${CanchaId}`);
  }
};
