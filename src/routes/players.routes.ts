import { Router } from 'express';
import { deletePlayer, getListPlayers, getPlayerById, postPlayer, updatePlayer } from '../controllers/players.controllers';
import { idValidator } from '../validation/generic.validation';
import { playerValidator } from '../validation/player.validation';

const routerPlayer = Router();

routerPlayer.get('/', getListPlayers);
routerPlayer.get('/:id', idValidator, getPlayerById);
routerPlayer.delete('/:id', idValidator, deletePlayer);
routerPlayer.post('/', playerValidator, postPlayer);
routerPlayer.patch('/:id', idValidator, playerValidator, updatePlayer);


export default routerPlayer;