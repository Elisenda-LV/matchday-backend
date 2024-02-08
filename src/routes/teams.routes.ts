import { Router } from "express";
import { deleteTeam, getListTeams, getTeamsById, postTeam, updateTeam } from "../controllers/teams.controller";
import { idValidator } from "../validation/generic.validation";
import { teamValidator } from "../validation/team.validation";


const routerTeam = Router();

routerTeam.get('/', getListTeams);
routerTeam.get('/:id', idValidator, getTeamsById);
routerTeam.delete('/:id', idValidator, deleteTeam);
routerTeam.post('/', teamValidator, postTeam);
routerTeam.patch('/:id', idValidator, teamValidator, updateTeam);


export default routerTeam;