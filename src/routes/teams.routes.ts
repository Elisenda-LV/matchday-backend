import { Router } from "express";
import { deleteTeam, getListTeams, getTeamsById, postTeam, updateTeam } from "../controllers/teams.controller";


const routerTeam = Router();

routerTeam.get('/', getListTeams);
routerTeam.get('/:id', getTeamsById);
routerTeam.delete('/:id', deleteTeam);
routerTeam.post('/', postTeam);
routerTeam.put('/:id', updateTeam);


export default routerTeam;