import Logger from '../../../shared/logger/appLogger';
import { validatePassword } from '../../utils/passwordManager';
import { LoginCanchero, Canchero } from '../../../canchero/entity/canchero';
import { getOneCancheroByEmailService } from '../../../canchero/services/getOneCancheroByEmailService';

export const authValidateCancheroService = async (
  cancheroRequest: LoginCanchero
): Promise<Canchero> => {
  try {
    const canchero = await getOneCancheroByEmailService(cancheroRequest.correo);
    if (!canchero) throw new Error('No existe el usuario');

    const auth = await validatePassword(
      cancheroRequest.password,
      canchero.password
    );
    if (!auth)
      throw new Error('El email o contraseña del Canchero es incorrecta');

    return canchero;
  } catch (error: any) {
    Logger.error('Error validating Canchero credentials', {
      instance: 'services',
      fn: 'authValidateCancheroService',
      trace: error.message,
    });
    throw new Error(`${error.message}`);
  }
};
