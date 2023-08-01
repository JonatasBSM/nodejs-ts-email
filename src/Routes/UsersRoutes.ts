import { index, create, store, show, edit, update, destroy } from '../controllers/UserController'
import { Router } from 'express';


const userRoutes = Router();

userRoutes.get('/users', index);

userRoutes.get('/users/create', create);

userRoutes.post('/users', store);

userRoutes.get('/users/:id', show);

userRoutes.get('/users/:id/edit', edit);

userRoutes.patch('/users/:id', update);

userRoutes.put('/users/:id', update);

userRoutes.delete('/users/:id', destroy);

export default userRoutes