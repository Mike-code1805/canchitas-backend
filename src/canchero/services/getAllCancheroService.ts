import Logger from '../../shared/logger/appLogger';
import { Canchero } from '../entity/canchero';
import { CancheroModel } from '../entity/cancheroModel';

export const getAllCancheroService = async (
  correo: string
): Promise<Canchero | null> => {
  try {
    const Cancheros: any = await CancheroModel.find();
    return Cancheros;
  } catch (error: any) {
    Logger.log(`error getting cancheros`, {
      service: 'getAllCancheroService',
      trace: error.message,
    });
    throw new Error(`error getting the cancheros`);
  }
};
