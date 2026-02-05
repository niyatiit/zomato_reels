import express from "express"
import { createFood, getFoodItems } from "../controllers/food.controller.js"
import { authUserMiddleware, userFoodPartnerMiddlware } from "../middleware/user.middleware.js"
import multer from "multer";


const upload = multer({
  storage : multer.memoryStorage()
})

const foodRouter = express.Router()

// /api/food/ :- protected - this Route is only uplod the video with food-partner authentication 
foodRouter.post("/", userFoodPartnerMiddlware,upload.single("video"),createFood )
// /api.food:- Protectd - get all the Videos in one side 
foodRouter.get("/",authUserMiddleware,getFoodItems)

export default foodRouter