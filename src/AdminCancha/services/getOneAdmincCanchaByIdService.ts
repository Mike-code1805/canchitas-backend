import { findOneResourceByIdWithoutPopulate } from '../../shared/factory/findOneResourceByIdWithoutPopulate';
import { AdminCanchaModel } from '../entity/models/adminCanchaModel';
import { AdminCancha } from '../entity/types/AdminCanchaModel';

export const getOneAdmincCanchaByIdService = async (
  id: string
): Promise<AdminCancha | null> => {
  try {
    const adminCancha: AdminCancha[] = await findOneResourceByIdWithoutPopulate(
      AdminCanchaModel
    )(id);
    return adminCancha[0];
  } catch (error: any) {
    throw new Error(error.message);
  }
};
