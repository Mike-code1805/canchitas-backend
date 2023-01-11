import { model } from 'mongoose';
import { hatSchema } from '../schemas/adminCanchaModelSchema';
import { Hat } from '../types/AdminCanchaModel';

export const AdminCanchaModel = model<Hat>('Hat', hatSchema);
