import { findOneResourceByField } from '../../shared/factory';
import Logger from '../../shared/logger/appLogger';
import { Canchero } from '../entity/canchero';
import { CancheroModel } from '../entity/cancheroModel';

export const getOneCancheroByDniService = async (
  dni: number
): Promise<Canchero | null> => {
  try {
    const canchero: Canchero | null = await findOneResourceByField(
      CancheroModel
    )({
      dni,
    });
    return canchero;
  } catch (error: any) {
    Logger.log(`error getting the Canchero with correo: ${dni}`, {
      service: 'getOneCancheroByCorreoService',
      trace: error.message,
    });
    throw new Error(`Error con el dni ${dni}`);
  }
};
