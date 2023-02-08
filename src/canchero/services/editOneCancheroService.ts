import { findOneResourceByField } from '../../shared/factory';
import logger from '../../shared/logger/appLogger';
// import { findOneResourceByField } from '../../shared/factory/findOneResourceByField';
// import { updateOneResourceByid } from '../../shared/factory/updateOneResourceByid';

// import { CancheroModel } from '../entity/models/cancheroModel';
// import { Canchero } from '../entity/types/Canchero';
import { Canchero } from '../entity/canchero';
import { CancheroModel } from '../entity/cancheroModel';
import { updateOneResourceById } from '../../shared/factory/updateOneResourceById';

export const editOneCancheroService = async (
  cancheroId: string,
  canchero: any
): Promise<Canchero | null> => {
  try {
    const exists = await findOneResourceByField(CancheroModel)({
      _id: cancheroId,
    });

    if (!exists) throw new Error('Este usuario no puede ser editado');
    const editedCanchero = await updateOneResourceById(CancheroModel)(
      cancheroId,
      canchero
    );

    return editedCanchero;
  } catch (error: any) {
    logger.error(`error updating the canchero with id ${cancheroId}`, {
      instance: 'services',
      fn: ';editOneCancheroService',
      trace: error.message,
    });
    throw new Error(`error actualizando al canchero id:${cancheroId}`);
  }
};
