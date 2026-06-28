import mongoose from 'mongoose'
const employeeSchema = new mongoose.Schema({

name:{
    type : String,
    required : true
},
issue:{
    type: String,
    required : true
},
phone:{
    type:Number,
}
});


export default mongoose.model('Employee',employeeSchema)