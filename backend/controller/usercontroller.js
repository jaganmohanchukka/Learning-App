import User from '../models/User.js'

const createUser = async(req,res)=>{
    try{
        const {name, issue, phone} = req.body;
        console.log(req.body)
        const user = new User({
            name,
            issue,
            phone
        });
        await user.save();
        res.status(201).json(user)
    }
    catch(err){
        
        console.log("error",err);
        res.status(500).json({message:"server error"});
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getEnrolledCourses = async (req, res) => {
    try{
        const user = await User.findById(req.user.id)
            .populate("enrolledCourses");

        res.status(200).json(user.enrolledCourses);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
    
};

export default {
    createUser,
    getUsers,
    getUser,
    getEnrolledCourses

}
