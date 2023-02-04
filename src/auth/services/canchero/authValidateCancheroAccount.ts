import { validateAuthToken } from '../../utils/tokenManager';
import { findOneResourceByIdWithoutPopulate } from '../../../shared/factory/findOneResourceByIdWithoutPopulate';
import { CancheroModel } from '../../../canchero/entity/cancheroModel';
import { Canchero } from '../../../canchero/entity/canchero';
import Logger from '../../../shared/logger/appLogger';

export const authValidateCancheroAccount = async (
  authorization: string
): Promise<{
  token: {
    authToken: string;
  };
  canchero: Canchero;
}> => {
  const cancheroValidate: any = validateAuthToken(authorization);
  if (!cancheroValidate) throw new Error('invalid canchero');
  try {
    const canchero = await findOneResourceByIdWithoutPopulate(CancheroModel)(
      cancheroValidate.id
    );
    if (!canchero) throw new Error('invalid canchero id');
    
    return {
      canchero: canchero[0],
      token: {
        authToken: authorization,
      },
    };
  } catch (error: any) {
    Logger.error('Error validating canchero email', {
      instance: 'authValidateCancheroAccount',
      fn: 'authValidateCancheroAccount',
      trace: error.message,
    });
    throw new Error('Error validating canchero email');
  }
};
