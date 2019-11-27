import express from 'express';

import DashboardController from './app/controllers/DashboardController';
import UserController from './app/controllers/UserController';
import GroupController from './app/controllers/GroupController';
import EventController from './app/controllers/EventController';
// import DashboardController from '../src/app/controllers/DashboardController'

const routes = express.Router();

routes.get('/', DashboardController.show);

routes.get('/users/:user_id', UserController.show);
routes.post('/users', UserController.store);
routes.delete('/users', UserController.destroy);
// routes.put('/users/:user_id', UserController.update);

// routes.get('/events', EventController.index);
routes.post('/events/:user_id', EventController.store);
// routes.delete('/events/:event_id', EventController.destroy);
// routes.put('/events/:event_id', EventController.update);

routes.get('/groups/:group_id', GroupController.show);
// routes.post('/groups/avaliable', GroupController.match_groups);
routes.post('/groups', GroupController.store);
routes.delete('/groups', GroupController.destroy);
routes.put('/groups', GroupController.update);

// routes.get('/dashboard', DashboardController.show);

export default routes;
