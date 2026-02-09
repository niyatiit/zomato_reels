import foodModel from "../models/food.model.js";
import foodpartnerModel from "../models/foodpartner.model.js";

const getFoodPartnerById = async (req, res) => {
  try {
    const foodPartnerId = req.params.id;

    const foodPartner = await foodpartnerModel.findById(foodPartnerId);
    if (!foodPartner) {
      return res.status(404).json({
        success: false,
        message: "Food Partner Not Found",
      });
    }

    const foods = await foodModel.find({ foodPartner: foodPartnerId });

    return res.status(200).json({
      success: true,
      foodPartner,
      foods, // 🔥 MUST BE HERE
    });
  } catch (error) {
    console.error("Get Food Partner Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export { getFoodPartnerById };
