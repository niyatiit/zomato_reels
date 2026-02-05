import foodpartnerModel from "../models/foodpartner.model.js";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

// Food_partner can only access this function means food-partner only create the video and upload the video not other user
const userFoodPartnerMiddlware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ success: false, message: "Please login first " });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const foodPartner = await foodpartnerModel.findById(decoded.id);

    req.foodPartner = foodPartner; // create the new property

    next();
  } catch (error) {
    console.log("Token Error :- ", error);
    return res.json({ success: false, message: error.message });
  }
};

// Get all the videos from users screen
const authUserMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ success: false, message: "Please Login First" });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decode.id);

    req.user = user;

    next();
  } catch (error) {
    console.log("Get all the Videos Error :- ", error);
    return res.json({ success: false, message: error.message });
  }
};
export { userFoodPartnerMiddlware ,authUserMiddleware};
