import mongoose from 'mongoose'
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
        required : true
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
        ref: "Course",
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