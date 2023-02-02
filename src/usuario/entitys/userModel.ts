import mongoose from 'mongoose';
import { User } from './user';
import { userSchema } from './userSchema';

export const UserModel = mongoose.model<User>('User', userSchema);
