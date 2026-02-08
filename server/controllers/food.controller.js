import foodModel from "../models/food.model.js";
import uploadFile from "../service/storage.service.js";
import { v4 as uuid } from "uuid";
const createFood = async (req, res) => {
  try {
    console.log(req.foodPartner);

    console.log(req.body);
    console.log(req.file);

    const fileUploadResult = await uploadFile(req.file.buffer, uuid());

    console.log(fileUploadResult);

    const foodItem = await foodModel.create({
      name: req.body.name,
      video: fileUploadResult.url,
      description: req.body.description,
      foodPartner: req.foodPartner._id,
    });

    return res.json({
      success: true,
      message: "Food items created successfully",
      foodItem,
    });
  } catch (error) {
    console.log("Create Food Error :- ", error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

const getFoodItems = async (req, res) => {
  try {
    const foodItems = await foodModel.find({})

    return res.json({success : true,message : "Food Items Fetched Successfully" , foodItems})
  } catch (error) {
    console.log("Get All Users Video Error:-", error);
    return res.json({ success: false, message: error.message });
  }
};
// const getFoodItems = async (req, res) => {
//   try {
//     const foodItems = await foodModel
//       .find({})
//       .populate("foodPartner");

//     return res.json({
//       success: true,
//       message: "Food Items Fetched Successfully",
//       foodItems,
//     });
//   } catch (error) {
//     console.log("Get Food Error:", error);
//     return res.json({ success: false, message: error.message });
//   }
// };

export { createFood, getFoodItems };
