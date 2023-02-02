import { model } from 'mongoose';
import { Canchero } from './canchero';
import { cancheroSchema } from './cancheroSchema';

export const CancheroModel = model<Canchero>('Canchero', cancheroSchema);
