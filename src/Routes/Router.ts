import { Router } from 'express';
import usersRouter from './UsersRoutes';
import authRouter from './AuthRoutes';

const router: Router = Router();

router.use('/login', authRouter)
router.use('/users', usersRouter);

export default router;
