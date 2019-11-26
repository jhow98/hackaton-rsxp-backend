import express from 'express';

import UserController from '../src/app/controllers/UserController'
//import DashboardController from '../src/app/controllers/DashboardController'
//import EventController from '../src/app/controllers/EventController'
//import DashboardController from '../src/app/controllers/DashboardController'


const routes = express.Router();

// routes.get('/events', EventController.index); 
// routes.post('/events/:user_id', EventController.store); 
// routes.delete('/events', EventController.destroy); 
// routes.put('/events', EventController.update); 

// routes.get('/group', GroupController.index); 
// routes.post('/group/', GroupController.store); 
// routes.delete('/group', GroupController.destroy); 
// routes.put('/group', GroupController.update); 

routes.get('/users', UserController.index); 
routes.post('/users/', UserController.store); 
routes.delete('/users', UserController.destoy); 
routes.put('/users', UserController.update);  

// routes.get('/dashboard', DashboardController.show); 

module.exports = routes;