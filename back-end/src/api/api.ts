import 'express-async-errors';
import express from 'express';
import errorHandle from '../errors/errorHandle';
import userRouter from '../routers/userRouter';

const api = express();

api.use(express.json());

api.use('/users', userRouter);

api.use(errorHandle);

export default api;
