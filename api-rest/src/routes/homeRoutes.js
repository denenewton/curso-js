import { Router } from 'express';
import homeController from '../controllers/homeControllers';
const routes = new Router();

routes.get('/', homeController.index);

module.exports = routes;
