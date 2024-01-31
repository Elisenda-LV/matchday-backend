import { Router } from "express";
import { getListLeagues } from "../controllers/leagues.controller";

const routerLeague = Router();

routerLeague.get('/', getListLeagues);


export default routerLeague;