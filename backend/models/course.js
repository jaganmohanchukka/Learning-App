import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    photo:{
        type : String,
        required : true
    },
    provider:{
        type : String,
        required : true
    },
    discription:{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    }
});
export default mongoose.model('course',courseSchema)