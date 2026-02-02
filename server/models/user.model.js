import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { minimize: true },
); //this is show you that when you create one user time and when you update the user show the time means in shot show the time of the user creation and updation

const userModel = mongoose.model.User || mongoose.model("User", userSchema);

export default userModel;
