import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create token because check that user is loged in or not .
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

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

    console.log("User ID :: ", user._id);
    // const token = createToken(user._id)

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

    // if (isMatch) {
    //   res.json({ succes: true, token });
    // } else {
    //   res.json({
    //     success: false,
    //     message: "Password is not match please try again",
    //   });
    // }

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Password does not match please try agaib",
      });
    }

    const token = createToken(user._id);
    return res.json({ success: true, message: "Login is successfully" ,token});
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

export { register, login, logout };
