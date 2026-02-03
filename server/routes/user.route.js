import express from "express"
import { login, loginfoodPartner, logout, logoutFoodPartner, register, registerFoodPartner } from "../controllers/user.controller.js";

const userRouter = express.Router();

/*********** User Router ******* */
userRouter.post("/register" , register);
userRouter.post("/login" , login);
userRouter.get("/logout" , logout);


/********* Food Partner Router *********/
const foodPartnerRouter = express.Router();
foodPartnerRouter.post("/food-partner/register", registerFoodPartner)
foodPartnerRouter.post("/food-partner/login", loginfoodPartner)
foodPartnerRouter.get("/food-partner/logout", logoutFoodPartner)

export {userRouter , foodPartnerRouter}