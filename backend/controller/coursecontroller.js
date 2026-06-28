import Course from '../models/course.js'
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
const getCourse=async (req, res) => {
    try {
        const course = await Course.find()
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export default {
    createCourse,
    getCourse
}