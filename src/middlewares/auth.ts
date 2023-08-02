import { NextFunction } from "express";
import { verify } from 'jsonwebtoken'
import dotEnv from 'dotenv'

dotEnv.config();

export function auth(req, res, next: NextFunction) {

    const jwToken = req.header('Authorization');

    if(!jwToken)
      res.status(401)

    verify(jwToken, process.env.SECRET, (err, user) => {
      if(err)
        throw err;

      req.user = user;
      next();
    })

}