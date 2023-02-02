import Logger from '../../shared/logger/appLogger';
import { createResource } from '../../shared/factory/createResource';
import { CreateCancha, Cancha } from '../entity/cancha';
import { CanchaModel } from '../entity/CanchaModel';

export const createCanchaService = async (
  canchaRequest: CreateCancha
): Promise<Cancha> => {
  try {
    const exist = await CanchaModel.findOne({ nombre: canchaRequest.nombre });
    if (exist) throw new Error(`Esta nombre de cancha ya existe`);
    const cancha = await createResource(CanchaModel)(canchaRequest);
    return cancha as Cancha;
  } catch (error: any) {
    Logger.error('error creating a new Cancha service', {
      instance: 'services',
      service: 'createCanchaService',
      trace: error.message ? error.message : '',
    });
    throw new Error(`${error.message}`);
  }
};
