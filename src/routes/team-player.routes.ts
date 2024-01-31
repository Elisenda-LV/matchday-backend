import { Router } from "express";
import { getListTeamPlayers } from "../controllers/teams-players.controller";


const routerTP = Router();

routerTP.get('/', getListTeamPlayers);

export default routerTP;