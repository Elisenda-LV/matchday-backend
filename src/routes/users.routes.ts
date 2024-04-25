import { Router } from "express";
import { deleteUser, getUserById, getUsers, postUser, updateUser } from "../controllers/user.controller";
import { idValidator } from "../validation/generic.validation";
import { userValidator } from "../validation/user.validation";
import authenticateToken from '../middlewares/authenticate-token';



const routerUsers = Router();

//routerUsers.get('/:id', (req, res, next) => authenticateToken(req as AuthenticatedRequest, res, next), idValidator, getUserById);
routerUsers.get('/', getUsers);
routerUsers.get('/:id', idValidator, getUserById);
routerUsers.delete('/:id', idValidator, deleteUser);
routerUsers.post('/', userValidator, postUser);
routerUsers.patch('/:id', idValidator, userValidator, updateUser);





export default routerUsers;