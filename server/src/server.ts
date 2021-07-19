import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

//http://localhost:3333/users
//http://localhost:3333/contacts
app.listen(3333);
