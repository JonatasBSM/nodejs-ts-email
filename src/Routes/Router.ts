import { Router } from 'express';
import userRoutes from './UsersRoutes';

const router: Router = Router();

router.use('/', userRoutes);

export default router;
