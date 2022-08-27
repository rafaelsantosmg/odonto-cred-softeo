import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import errorHandle from '../errors/errorHandle';
import userRouter from '../routers/userRouter';
import loginRouter from '../routers/loginRouter';

const api = express();

api.use(cors());

api.use(express.json());

api.use('/users', userRouter);
api.use('/login', loginRouter);

api.use(errorHandle);

export default api;
