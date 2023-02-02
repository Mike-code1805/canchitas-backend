import { authTokenValidation } from '../auth/middlewares/authTokenValidation';
import { Router } from 'express';
import { bodyRequestValidator } from '../shared/validators/bodyRequestValidators';
import { canchaSchema } from './utils/canchaValidator';
import {
  createCanchaController,
  getAllCanchasCancheroController,
  deleteOneCanchaController,
  getOneCanchaByIdController,
  updateCanchaController,
  getAllCanchasController,
} from './controllers';

const canchaRouter: Router = Router();

canchaRouter
  .route('')
  .get(authTokenValidation, getAllCanchasCancheroController)
  .post(
    bodyRequestValidator(canchaSchema),
    authTokenValidation,
    createCanchaController
  );

canchaRouter.route('/all').get(getAllCanchasController);

canchaRouter
  .route('/:id')
  .get(authTokenValidation, getOneCanchaByIdController)
  .delete(authTokenValidation, deleteOneCanchaController)
  .put(authTokenValidation, updateCanchaController);

export default canchaRouter;
