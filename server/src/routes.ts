import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';


const routes = express.Router();

const classesControlers = new ClassesController();
const connectionsController = new ConnectionController();



routes.get('/classes', classesControlers.index);
routes.post('/classes', classesControlers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;