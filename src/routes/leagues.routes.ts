import { Router } from "express";
import { deleteLeague, getLeagueById, getListLeagues, postLeague, updateLeague } from "../controllers/leagues.controller";
import { idValidator } from "../validation/generic.validation";
import { leagueValidator } from "../validation/league.validation";

const routerLeague = Router();

routerLeague.get('/', getListLeagues);
routerLeague.get('/:id', idValidator, getLeagueById);
routerLeague.delete('/:id', idValidator, deleteLeague);
routerLeague.post('/', leagueValidator, postLeague);
routerLeague.patch('/:id', idValidator, leagueValidator, updateLeague)


export default routerLeague;