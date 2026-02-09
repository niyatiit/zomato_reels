import "./config/env.js"
import express from "express";
import dotenv from "dotenv"; // using for the process.env.anytype related .env file 
import connectDB from "./config/db.js";
import {foodPartnerRouter, userRouter } from "./routes/user.route.js";
import foodRouter from "./routes/food.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import food_PartnerRoute from "./routes/food-partner.route.js";

// load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true
}))

// connect database
connectDB();

// API calling

app.use(express.json());
app.use(cookieParser())
app.use("/api/user" , userRouter) // users
app.use("/api" , foodPartnerRouter) //food-partner
app.use("/api/food" , foodRouter) // only food
app.use('/api/food-partner' , food_PartnerRoute) // food-partner reels for creat this  

app.get("/", (req, res) => {
  res.send("Server is starting");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
