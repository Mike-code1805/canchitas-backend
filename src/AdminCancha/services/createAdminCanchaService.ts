import { createResource } from '../../shared/factory/createResource';
import { AdminCancha } from '../entity/types/AdminCanchaModel';
import { AdminCanchaModel } from '../entity/models/adminCanchaModel';

export const createAdminCanchaService = async (
  adminCanchaRequest: AdminCancha
): Promise<AdminCancha> => {
  try {
    const adminCancha = await createResource(AdminCanchaModel)(
      adminCanchaRequest
    );
    return adminCancha as AdminCancha;
  } catch (error: any) {
    throw new Error(`Error creating a new adminCancha ${error.message}`);
  }
};
