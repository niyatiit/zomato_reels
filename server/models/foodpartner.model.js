import mongoose from "mongoose";

const foodpartnerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true ,
    },
    password : {
        type : String ,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true 
    }
},{
    timeseries : true
})

const foodpartnerModel = mongoose.model.FoodPartner || mongoose.model("FoodPartner" , foodpartnerSchema)

export default foodpartnerModel