import mongoose from 'mongoose'
import course from "../models/Course.js";

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    age: {
        type: Number,
        min: 16,
        max: 100,
    },
    email:{
        type: String,
        required : true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    phone:{
        type:Number,
        required : true,
        match: /^[6-9][0-9]{9}$/
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    }, 
    enrolledCourses: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
        },
    ],
    role: {
        type: String,
        enum: ["student", "instructor", "admin"],
        default: "student" ,
    },


},
{
    
    timestamps: true,
}
);


export default mongoose.model('User',userSchema)