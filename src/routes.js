import express from 'express';

import DashboardController from '../src/app/controllers/DashboardController'
import UserController from '../src/app/controllers/UserController'
import GroupController from '../src/app/controllers/GroupController'
//import EventController from '../src/app/controllers/EventController'
//import DashboardController from '../src/app/controllers/DashboardController'

const routes = express.Router();

routes.get('/', DashboardController.show); 

routes.get('/users/:user_id', UserController.show); 
routes.post('/users/', UserController.store); 
routes.delete('/users/:user_id', UserController.destoy); 
routes.put('/users/:user_id', UserController.update);  

// routes.get('/events', EventController.index); 
// routes.post('/events/:event_id', EventController.store); 
// routes.delete('/events/:event_id', EventController.destroy); 
// routes.put('/events/:event_id', EventController.update); 

routes.get('/groups/:group_id', GroupController.index); 
routes.get('/groups/avaliable', GroupController.match_groups); 
routes.post('/groups', GroupController.store); 
routes.delete('/groups/:group_id', GroupController.destroy); 
routes.put('/groups/:group_id', GroupController.update); 

// routes.get('/dashboard', DashboardController.show); 

export default routes;
