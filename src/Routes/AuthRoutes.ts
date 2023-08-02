import { Router } from "express";
import { index, store } from "../controllers/AuthController"

const authRouter: Router = Router();

authRouter.get('/', index);

authRouter.post('/store', store);

export default authRouter;