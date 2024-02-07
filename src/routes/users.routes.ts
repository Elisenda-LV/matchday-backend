import { Router } from "express";
import { getUserById } from "../controllers/user.controller";
import { idValidator } from "../validation/generic.validation";
import authenticateToken from "../middlewares/authenticate-token";



const routerUsers = Router();

routerUsers.get('/:id', authenticateToken, idValidator, getUserById);


export default routerUsers;