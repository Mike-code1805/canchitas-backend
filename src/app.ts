import express, {
  Application,
  NextFunction,
  Request,
  Response,
} from 'express';

const app: Application = express();

app.use(express.json());

app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message });
});

export default app;
