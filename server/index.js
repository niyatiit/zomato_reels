import express from "express";
import dotenv from "dotenv"; // using for the process.env.anytype related .env file 
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";

// load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// connect database
connectDB();

// API calling

app.use(express.json());
app.use("/api/user" , userRouter)

app.get("/", (req, res) => {
  res.send("Server is starting");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
