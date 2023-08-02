import { index, create, store, show, edit, update, destroy } from '../controllers/UserController'
import { Router } from 'express';
import { auth } from '../middlewares/auth';

const usersRouter: Router = Router();

usersRouter.get('/', index);

usersRouter.get('/create', create);

usersRouter.post('/', store);

usersRouter.get('/:id', show);

usersRouter.use(auth)

usersRouter.get('/:id/edit', edit);

usersRouter.patch('/:id', update);

usersRouter.put('/:id', update);

usersRouter.delete('/:id', destroy);

export default usersRouter