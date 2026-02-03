import foodpartnerModel from "../models/foodpartner.model.js";
import jwt from "jsonwebtoken";

const userFoodPartnerMiddlware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ success: false, message: "Please login first " });
  }

  try {
    const decoded = jwt.verify(token , process.env.JWT_SECRET)

    const foodPartner = await foodpartnerModel.findById(decoded.id)

    req.foodPartner = foodPartner // create the new property 

    next()
  } catch (error) {
    console.log("Token Error :- ", error);
    return res.json({ success: false, message: error.message });
  }
};


export {userFoodPartnerMiddlware}