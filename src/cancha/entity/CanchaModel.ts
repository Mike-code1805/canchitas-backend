import { model } from 'mongoose';
import { Cancha } from './cancha';
import { canchaSchema } from './canchaSchema';

export const CanchaModel = model<Cancha>('Cancha', canchaSchema);
