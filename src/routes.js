import express from 'express';

import UserController from '../src/app/controllers/UserController'
import DashboardController from '../src/app/controllers/DashboardController'
import EventController from '../src/app/controllers/EventController'

const routes = express.Router();

routes.get('/events', EventController.get); 
routes.post('/events/', EventController.post); 
routes.delete('/events', EventController.delete); 
routes.put('/events', EventController.put); 

routes.get('/group', GroupController.get); 
routes.post('/group/', GroupController.post); 
routes.delete('/group', GroupController.delete); 
routes.put('/group', GroupController.put); 

routes.get('/users', UserController.get); 
routes.post('/users/', UserController.post); 
routes.delete('/users', UserController.delete); 
routes.put('/users', UserController.put);  

routes.get('/dashboard', DashboardController.show); 

routes.post('/spots/:spot_id/bookings', BookingController.store)

export default routes;