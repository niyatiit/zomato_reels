import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import foodpartnerModel from "../models/foodpartner.model.js";

// create token because check that user is loged in or not .
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

/*************************** User Authentication Only  ********************** */
const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
      return res.json({
        success: false,
        message: "All Fields are requires please enter the all fields",
      });
    }

    const isUserExit = await userModel.findOne({ email });

    if (isUserExit) {
      return res.json({
        success: false,
        message: "User is already exist please try again with another email",
      });
    }

    // const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, 10);
    // console.log("Hash Password Check Here :- " , hashPassword)

    const newUser = new userModel({
      name,
      password: hashPassword,
      email,
    });

    const user = await newUser.save();

    // console.log("User ID :: ", user._id);
    const token = createToken(user._id);
    res.cookie("token" , token, {
      httpOnly : true , 
      secure : false , 
      sameSite : "lax"
    })

    res.json({
      success: true,
      message: "Registration Successfully created ",
      token,
    });
  } catch (error) {
    console.log("Registration error : ", error);
    return res.json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Please enter the all fileds ",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User is not exists please enter email again",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Password does not match please try agaib",
      });
    }

    const token = createToken(user._id);

    res.cookie("token" , token,{
      httpOnly : true,
      secure : false , 
      sameSite : "lax",
    })
    return res.json({ success: true, message: "Login is successfully", token });
  } catch (error) {
    console.log("Registration error : ", error);
    return res.json({ success: false, message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ success: true, message: "Logout successfully" });
  } catch (error) {
    console.log("Registration error : ", error);
  }
};

/**************************** Food Partner Authentication Only *************************** */

const registerFoodPartner = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
      return res.json({
        success: false,
        message: "please enter the all fields",
      });
    }

    const isAccountExists = await foodpartnerModel.findOne({ email });

    if (isAccountExists) {
      return res.json({
        success: false,
        message:
          "Food Partner is already exists please enter the another email",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const foodpartner = new foodpartnerModel({
      name,
      password: hashPassword,
      email,
    });

    const foodUser = await foodpartner.save();

    const token = createToken(foodUser._id);

     res.cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost
      sameSite: "lax",
    });

    return res.json({
      success: true,
      message: "Food Partner Registration Successfully",
      token,
    });
  } catch (error) {
    console.log("Register Food Partner Error :- ", error);
    return res.json({ success: false, message: error.message });
  }
};

const loginfoodPartner = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "All fields are required please enter the all fields",
      });
    }

    const foodUser = await foodpartnerModel.findOne({ email });

    if (!foodUser) {
      return res.json({
        success: false,
        message: "Email is not found please enter the valid email ",
      });
    }

    const isMatchPassword = await bcrypt.compare(password, foodUser.password);

    if (!isMatchPassword) {
      return res.json({
        success: false,
        message: "Password does not match please try again ",
      });
    }

    const token = createToken(foodUser._id);

     res.cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost
      sameSite: "lax",
    });

    return res.json({
      success: true,
      message: "Food partner login is successfully",
      token,
    });
  } catch (error) {
    console.log("Food Partner Login Error :- ", error);
    return res.json({ success: false, message: error.message });
  }
};

const logoutFoodPartner = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({
      success: true,
      message: "Food Partner Logout Successfully "
    });
  } catch (error) {
    console.log("Logout the food partner :: ", error);
    return res.json({ success: false, message: error.message });
  }
};
export { register, login, logout, registerFoodPartner, loginfoodPartner , logoutFoodPartner };
