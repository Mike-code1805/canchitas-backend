import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';
import authRouter from './auth/authRoutes';
import { ApplicationError } from './shared/customErrors/ApplicationError';

const app: Application = express();

app.use(express.json());

app.use(authRouter);

app.use(
  (err: ApplicationError, _req: Request, res: Response, next: NextFunction) => {
    res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err.message });
  }
);

export default app;
