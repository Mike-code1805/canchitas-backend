import logger from '../../shared/logger/appLogger';
import { CanchaModel } from '../entity/CanchaModel';
import { deleteOneResourceById } from '../../shared/factory/deleteOneResourceById';

export const deleteOneCanchaService = async (
  canchaId: string,
  userId: string
): Promise<boolean> => {
  try {
    if (!canchaId) throw new Error('invalid project id');
    if (!userId) throw new Error('invalid user id');

    const result = await deleteOneResourceById(CanchaModel)({
      _id: canchaId,
      owner: userId,
    });

    console.log({result});

    return result ? true : false;
  } catch (error: any) {
    logger.error(`Error deleting project: ${error.message}`, {
      instance: 'services',
      fn: 'deleteOneProjectService',
      trace: error.message,
    });
    throw new Error(`Error deleting project: ${error.message}`);
  }
};
