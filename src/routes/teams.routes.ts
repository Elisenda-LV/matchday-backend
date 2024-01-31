import { Router } from "express";
import { getListTeams } from "../controllers/teams.controller";

const routerTeam = Router();

routerTeam.get('/', getListTeams);


export default routerTeam;