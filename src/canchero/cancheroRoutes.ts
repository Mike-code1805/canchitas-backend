import { Router } from 'express';
import {
  getAllCancheroController,
  editCancheroController,
} from './controllers';
import { authTokenValidation } from '../auth/middlewares/authTokenValidation';

const cancheroRouter: Router = Router();

cancheroRouter
  .route('')
  .get(getAllCancheroController)
  .put(authTokenValidation, editCancheroController);

export default cancheroRouter;
