import { Router } from 'express';
import { getListPlayers } from '../controllers/players.controllers';

const routerPlayer = Router();

routerPlayer.get('/', getListPlayers);


export default routerPlayer;