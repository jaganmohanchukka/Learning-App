import User from '../models/User.js'


const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const getEnrolledCourses = async (req, res) => {
    try{
        const user = await User.findById(req.user.id)
            .populate("enrolledCourses");

        res.status(200).json(user.enrolledCourses);
    } catch(error){
        res.status(500).json({ message: error.message })
    }
    
};
const addEnrolledCourses = async (req,res)=>{
    try{
        const { courseid } = req.body;
        const user = await User.findById(req.user.id);
            if (!user) return res.status(404).json({ message: "User not found" });
            if (user.enrolledCourses.includes(courseid)) {
                return res.status(409).json({
                    message: "Already enrolled in this course"
                });
            }
            user.enrolledCourses.push(courseid);
            await user.save();
            res.status(200).json({ message: "Course added successfully", user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

}

export default {
    getUsers,
    getMe,
    getEnrolledCourses,
    addEnrolledCourses

}
