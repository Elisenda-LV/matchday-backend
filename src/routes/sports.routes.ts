import { Router } from 'express';
import { getListSports } from '../controllers/sports.controller';

const routerSport = Router();

routerSport.get('/', getListSports);


export default routerSport;