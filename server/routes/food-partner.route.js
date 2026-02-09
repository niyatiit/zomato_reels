import express from "express"
import { getFoodPartnerById } from "../controllers/food-partner.controller.js"
import { authUserMiddleware } from "../middleware/user.middleware.js"

const food_PartnerRoute = express.Router()

food_PartnerRoute.get("/:id",authUserMiddleware,getFoodPartnerById)

export default food_PartnerRoute