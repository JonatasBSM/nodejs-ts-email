import express, { Express } from 'express';
import router from './routes/Router';
import bodyParser from 'body-parser';

const app: Express = express()
const port: number = 3000;

app.use(bodyParser.json());
app.use(router);

app.listen(port, () =>  {
    console.log('App ontheline!');
});
