import { CreateCanchero } from '../../../canchero/entity/canchero';
import { createCancheroService } from '../../../canchero/services';
import Logger from '../../../shared/logger/appLogger';

export const authCreateCancheroAccountService = async (
  CancheroRequest: CreateCanchero
): Promise<void> => {
  try {
    await createCancheroService(CancheroRequest);
  } catch (error: any) {
    Logger.error('Error creating Canchero account', {
      instance: 'services',
      fn: 'authCreateCancheroAccountService',
      trace: error.message,
    });
    throw new Error(`Error creando la cuenta del Canchero ${error.message}`);
  }
};
