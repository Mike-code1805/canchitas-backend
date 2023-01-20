import { findOneResourceByField } from '../../shared/factory';
import Logger from '../../shared/logger/appLogger';
import { Canchero } from '../entity/canchero';
import { CancheroModel } from '../entity/cancheroModel';

export const getOneCancheroByEmailService = async (
  correo: string
): Promise<Canchero | null> => {
  try {
    const canchero: Canchero | null = await findOneResourceByField(
      CancheroModel
    )({
      correo,
    });
    return canchero;
  } catch (error: any) {
    Logger.log(`error getting the Canchero with correo: ${correo}`, {
      service: 'getOneCancheroByCorreoService',
      trace: error.message,
    });
    throw new Error(`error getting the Canchero with correo${correo}`);
  }
};
