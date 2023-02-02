import { Model as ModelType, ObjectId } from 'mongoose';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';

export const updateOneResourceById =
  <K>(Model: ModelType<K>) =>
  async (id?: string | ObjectId, update?: Object): Promise<K | null> => {
    try {
      return await Model.findOneAndUpdate({ _id: id }, update);
    } catch (error: any) {
      throw new ApplicationError(401, error);
    }
  };
