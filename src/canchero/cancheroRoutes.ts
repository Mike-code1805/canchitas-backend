import { Router } from 'express';
import { getAllCancheroController } from './controllers';

const cancheroRouter: Router = Router();

cancheroRouter.route('').get(getAllCancheroController);

export default cancheroRouter;
