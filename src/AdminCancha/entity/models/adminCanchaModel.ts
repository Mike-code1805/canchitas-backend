import { AdminCancha } from '../types/AdminCanchaModel';
import { adminCanchaSchema } from '../schemas/adminCanchaModelSchema';
import { model } from 'mongoose';

export const AdminCanchaModel = model<AdminCancha>(
  'AdminCancha',
  adminCanchaSchema
);
