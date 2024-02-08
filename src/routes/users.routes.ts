import { Router } from "express";
import { deleteUser, getUserById, postUser, updateUser } from "../controllers/user.controller";
import { idValidator } from "../validation/generic.validation";
import { userValidator } from "../validation/user.validation";
import authenticateToken from '../middlewares/authenticate-token';



const routerUsers = Router();

//routerUsers.get('/:id', authenticateToken, idValidator, getUserById);
routerUsers.get('/', getUserById);
routerUsers.get('/:id', idValidator, getUserById);
routerUsers.delete('/:id', idValidator, deleteUser);
routerUsers.post('/', userValidator, postUser);
routerUsers.patch('/:id', idValidator, userValidator, updateUser);





export default routerUsers;