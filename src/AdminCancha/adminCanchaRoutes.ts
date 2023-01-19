import { Router } from 'express';

import {
  createAdminCanchaController,
  getOneAdminCanchaByIdController,
} from './controllers';

const adminCanchaRouter: Router = Router();

adminCanchaRouter.route('').post(createAdminCanchaController);

adminCanchaRouter.route('/:id').get(getOneAdminCanchaByIdController);

export default adminCanchaRouter;
