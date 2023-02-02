import { Router } from 'express';
import { bodyRequestValidator } from '../shared/validators/bodyRequestValidators';

import {
  signupAuthUserController,
  signinAuthUserController,
  signinAuthCancheroController,
  signupAuthCancheroController,
} from './controllers';

import {
  signUpUserSchema,
  signinSchema,
  signUpCancheroSchema,
} from './utils/userSchemaValidator';

const router: Router = Router();

router
  .route('/canchero/signup')
  .post(
    bodyRequestValidator(signUpCancheroSchema),
    signupAuthCancheroController
  );

router
  .route('/canchero/signin')
  .post(bodyRequestValidator(signinSchema), signinAuthCancheroController);

router
  .route('/user/signup')
  .post(bodyRequestValidator(signUpUserSchema), signupAuthUserController);

router
  .route('/user/signin')
  .post(bodyRequestValidator(signinSchema), signinAuthUserController);

export default router;
