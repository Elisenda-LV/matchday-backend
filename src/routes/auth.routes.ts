import { Router } from "express";
import { changePassword, forgotPassword, login, logout, register } from "../controllers/auth.controller";
import { changePasswordValidator, forgotPasswordValidator, loginValidator, registerValidator } from "../validation/auth.validation";


const routerAuth = Router();

//routerAuth.post('/register', registerValidator, register)
//routerAuth.post('/login', loginValidator, login)
//routerAuth.post('/forgot-password', forgotPasswordValidator, forgotPassword)
//routerAuth.post('/change-password', changePasswordValidator, changePassword)
//routerAuth.post('/logout', logout)


export default routerAuth;