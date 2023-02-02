import { ApplicationError } from '../customErrors/ApplicationError';
import { Model as ModelType } from 'mongoose';
import { User } from 'usuario/entitys/user';
import { Canchero } from '../../canchero/entity/canchero';
import { Cancha } from '../../cancha/entity/cancha';
import { Reservation } from '../../reservation/entity/reservation';

export const createResource =
  <
    K extends
      | ModelType<Canchero>
      | ModelType<User>
      | ModelType<Cancha>
      | ModelType<Reservation>
  >(
    Model: K
  ) =>
  async <T>(resource: T): Promise<Canchero | User | Cancha | Reservation> => {
    try {
      const newResource = new Model(resource);
      return await newResource.save();
    } catch (error: any) {
      throw new ApplicationError(400, error.message);
    }
  };
