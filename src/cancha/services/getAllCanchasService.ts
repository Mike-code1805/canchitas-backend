// import { findAllResources } from '../../shared/factory';

// import logger from '../../shared/logger/appLogger';
// import { UserIdType } from '../../users/entity/types/User';
// import { ProjectModel } from '../entity/models/projectModel';
// import { Project } from '../entity/types/Project';
import Logger from '../../shared/logger/appLogger';
import { UserIdType } from '../../usuario/entitys/user';
import { Cancha } from '../entity/cancha';
import { CanchaModel } from '../entity/CanchaModel';

export const getAllCanchasService = async (
  userId: string | UserIdType
): Promise<Cancha[]> => {
  try {
    //const projects: Project[] = await findAllResources(ProjectModel)({});
    if (!userId) throw new Error('invalid user id');
    const projects = await CanchaModel.find({ owner: userId });
    return projects;
  } catch (error: any) {
    Logger.error('error getting all the projects', {
      instance: 'services',
      fn: 'getAllCanchasService',
      trace: error.message,
    });
    throw new Error(`Error getting all the canchas: ${error.message}`);
  }
};
