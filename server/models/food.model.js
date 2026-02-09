import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true ,
    },
    video : {
        type : [String],
        required : true,
    },
    description : {
        type : String,
    },
    foodPartner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodPartner"
    }
})

const foodModel = mongoose.model.Food || mongoose.model("Food" , foodSchema)

export default foodModel