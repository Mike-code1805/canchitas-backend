import { Model as ModelType, ObjectId, Types } from 'mongoose';

export const findOneResourceByIdWithoutPopulate =
  <K>(Model: ModelType<K>) =>
  async (id: string): Promise<K[]> => {
    let findObject;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      findObject = {
        _id: typeof id === 'string' ? new Types.ObjectId(id) : id,
      };
    } else {
      findObject = { dni: id };
    }
    return await Model.find(findObject);
  };
