import { model } from 'mongoose';
import { hatSchema } from '../schemas/canchaSchema';
import { Hat } from '../types/Cancha';

export const CanchaModel = model<Cancha>('Hat', hatSchema);
