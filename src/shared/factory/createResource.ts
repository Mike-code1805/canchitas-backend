import { ApplicationError } from '../../customErrors/ApplicationError';
import { Model as ModelType } from 'mongoose';
import { AdminCancha } from '../../AdminCancha/entity/types/AdminCanchaModel';

export const createResource =
  <K extends ModelType<AdminCancha>>(Model: K) =>
  async <T>(resource: T): Promise<AdminCancha> => {
    try {
      const newResource = new Model(resource);
      return await newResource.save();
    } catch (error: any) {
      throw new ApplicationError(400, error.message);
    }
  };
