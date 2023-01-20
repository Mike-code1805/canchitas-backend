
import { CreateCanchero } from '../../../canchero/entity/canchero';
import { createCancheroService } from '../../../canchero/services';
import Logger from '../../../shared/logger/appLogger';
import { getOneUserByEmailService } from '../../../usuario/services/getOneUserByEmailService';

export const authCreateCancheroAccountService = async (
  cancheroRequest: CreateCanchero
): Promise<void> => {
  try {
    const user = await getOneUserByEmailService(cancheroRequest.correo);
    if (user) throw new Error('Este correo ya existe');
    await createCancheroService(cancheroRequest);
  } catch (error: any) {
    Logger.error('Error creating Canchero account', {
      instance: 'services',
      fn: 'authCreateCancheroAccountService',
      trace: error.message,
    });
    throw new Error(`Error creando la cuenta del Canchero ${error.message}`);
  }
};
