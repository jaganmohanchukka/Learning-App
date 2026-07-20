import Course from '../models/Course.js'
const createCourse = async(req,res)=>{
    try{
        const {name, photo, provider, discription, price} = req.body;
        const course = new Course({
            name,
            photo,
            provider,
            discription,
            price
        });
        await course.save();
        res.status(201).json(course)


    }catch(err){
        console.log("error",err);
        res.status(500).json({message:"server error"});
    }

}
const getCourses=async (req, res) => {
    try {
        const course = await Course.find()
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getCourse = async (req, res) =>{
    try{
        const { id } = req.params;
        const course = await Course.findById(id);
        res.status(200).json(course);

    } catch(error){
        res.status(500).json({ message: error.message })
    }

}
const deleteCourse = async (req, res) => {
    try{
        const { id } = req.params;
        const course = await Course.findByIdAndDelete(id);
        res.status(201).json(course);
    } catch(err){
        console.log("error",err);
        res.status(500).json({message:err.message});
    }
}



export default {
    createCourse,
    getCourses,
    getCourse,
    deleteCourse
}