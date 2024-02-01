import { Router } from "express";
import { deleteLeague, getLeagueById, getListLeagues, postLeague, updateLeague } from "../controllers/leagues.controller";

const routerLeague = Router();

routerLeague.get('/', getListLeagues);
routerLeague.get('/:id', getLeagueById);
routerLeague.delete('/:id', deleteLeague);
routerLeague.post('/', postLeague);
routerLeague.put('/:id', updateLeague)


export default routerLeague;