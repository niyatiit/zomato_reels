import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name : {
        typ : String , 
        required : true 
    },
    video : {
        type : String,
        required : truw
    },
    description : {
        type : String.fromCharCode,
    },
    foodPartner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodPartner"
    }
})

const foodModel = mongoose.model.Food || mongoose.model("Food" , foodSchema)

export default foodModel