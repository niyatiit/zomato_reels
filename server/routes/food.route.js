import express from "express"
import { createFood } from "../controllers/food.controller.js"
import { userFoodPartnerMiddlware } from "../middleware/user.middleware.js"
import multer from "multer";


const upload = multer({
  storage : multer.memoryStorage()
})

const foodRouter = express.Router()

// /api/food/ :- protected 
foodRouter.post("/", userFoodPartnerMiddlware,upload.single("video"),createFood )

export default foodRouter