import { encryptPassword } from '../../auth/utils/passwordManager';
import Logger from '../../shared/logger/appLogger';
import { createResource } from '../../shared/factory';
import { CreateCanchero, Canchero } from '../entity/canchero';
import { CancheroModel } from '../entity/cancheroModel';

export const createCancheroService = async (
  CancheroRequest: CreateCanchero
): Promise<Canchero> => {
  try {
    CancheroRequest['password'] = await encryptPassword(
      CancheroRequest.password
    );
    const canchero = await createResource(CancheroModel)(CancheroRequest);
    return canchero as Canchero;
  } catch (error: any) {
    Logger.error(
      `error creating Canchero with email ${CancheroRequest.correo}`,
      {
        service: 'createCancheroService',
        trace: error.message,
      }
    );
    throw new Error(
      `error creando al canchero con el correo ${CancheroRequest.correo}`
    );
  }
};
