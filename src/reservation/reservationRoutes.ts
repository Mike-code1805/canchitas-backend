import { Router } from 'express';
import { bodyRequestValidator } from '../shared/validators/bodyRequestValidators';
import { reservationSchema } from './utils/reservationValidator';
import { authTokenValidation } from '../auth/middlewares/authTokenValidation';
import {
  createReservationController,
  getAllReservationsController,
  deleteOneReservationController,
  getOneReservationByIdController,
  updateReservationController,
} from './controllers';

const reservationRouter: Router = Router();

reservationRouter
  .route('')
  .get(authTokenValidation, getAllReservationsController)
  .post(
    bodyRequestValidator(reservationSchema),
    authTokenValidation,
    createReservationController
  );

reservationRouter
  .route('/:id')
  .get(authTokenValidation, getOneReservationByIdController)
  .delete(authTokenValidation, deleteOneReservationController)
  .put(authTokenValidation, updateReservationController);

export default reservationRouter;
