import Logger from '../../shared/logger/appLogger';
import { createResource } from '../../shared/factory/createResource';
import { CreateCancha, Cancha } from '../entity/cancha';
import { CanchaModel } from '../../cancha/entity/CanchaModel';

export const createCanchaService = async (
  canchaRequest: CreateCancha
): Promise<Cancha> => {
  try {
    const cancha = await createResource(CanchaModel)(canchaRequest);
    return cancha as Cancha;
  } catch (error: any) {
    Logger.error('error creating a new Cancha service', {
      instance: 'services',
      service: 'createCanchaService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`Error creating a new Cancha ${error.message}`);
  }
};
