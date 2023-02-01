import logger from '../../shared/logger/appLogger';
import { CanchaModel } from '../entity/CanchaModel';
import { deleteOneResourceById } from '../../shared/factory/deleteOneResourceById';
import { Cancha } from '../entity/cancha';
import { findOneResourceByIdWithoutPopulate } from '../../shared/factory/findOneResourceByIdWithoutPopulate';

export const deleteOneCanchaService = async (
  canchaId: string,
  userId: string
): Promise<boolean> => {
  try {
    if (!canchaId) throw new Error('invalid project id');
    if (!userId) throw new Error('invalid user id');

    const cancha: Cancha[] = await findOneResourceByIdWithoutPopulate(
      CanchaModel
    )(canchaId);

    if (cancha[0].owner.toString() !== userId)
      throw new Error('Cancha not exist');

    const result = await deleteOneResourceById(CanchaModel)({
      _id: canchaId,
      owner: userId,
    });

    if (!result) throw new Error('cancha not found');

    console.log({ result });

    return result ? true : false;
  } catch (error: any) {
    logger.error(`Error deleting project: ${error.message}`, {
      instance: 'services',
      fn: 'deleteOneProjectService',
      trace: error.message,
    });
    throw new Error(error.message);
  }
};
