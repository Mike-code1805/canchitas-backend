import { Model as ModelType } from 'mongoose';

export const findOneResourceByField =
  <K>(Model: ModelType<K>) =>
  async (field: any): Promise<any> => {
    return await Model.findOne({ ...field });
  };
