import { CreateCanchero } from '../../../canchero/entity/canchero';
import { createCancheroService } from '../../../canchero/services';
import Logger from '../../../shared/logger/appLogger';
import { getOneUserByEmailService } from '../../../usuario/services/getOneUserByEmailService';
import { getOneCancheroByDniService } from '../../../canchero/services/getOneCancheroByDniService';

export const authCreateCancheroAccountService = async (
  cancheroRequest: CreateCanchero
): Promise<void> => {
  try {
    const user = await getOneUserByEmailService(cancheroRequest.correo);
    if (user) throw new Error('Este correo ya existe');

    const userDni = await getOneCancheroByDniService(cancheroRequest.dni);
    if (userDni) throw new Error('El DNI ya existe');

    await createCancheroService(cancheroRequest);
  } catch (error: any) {
    Logger.error('Error creating Canchero account', {
      instance: 'services',
      fn: 'authCreateCancheroAccountService',
      trace: error.message,
    });
    throw new Error(`Error creando la cuenta del canchero ${error.message}`);
  }
};
