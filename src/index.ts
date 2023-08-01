import express, { Express } from 'express';
import router from './routes/Router';
import connect from './Config/connection';

const app: Express = express()
const port: number = 3000;

app.use(router);

app.listen(port, () =>  {
    console.log('App ontheline!');
});
