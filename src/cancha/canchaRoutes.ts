import { authTokenValidation } from '../auth/middlewares/authTokenValidation';
import { Router } from 'express';
import { bodyRequestValidator } from '../shared/validators/bodyRequestValidators';
import { canchaSchema } from './utils/canchaValidator';
import {
  createCanchaController,
  getAllCanchasController,
  deleteOneCanchaController,
  getOneCanchaByIdController,
  updateCanchaController,
} from './controllers';

const canchaRouter: Router = Router();

canchaRouter
  .route('')
  // .post(bodyRequestValidator(hatSchema), createCanchaController)
  .get(authTokenValidation, getAllCanchasController)
  .post(bodyRequestValidator(canchaSchema), createCanchaController);

canchaRouter
  .route('/:id')
  .get(authTokenValidation, getOneCanchaByIdController)
  .delete(deleteOneCanchaController)
  .put(authTokenValidation, updateCanchaController);

export default canchaRouter;
