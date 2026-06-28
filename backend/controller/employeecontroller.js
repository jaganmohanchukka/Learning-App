import Employee from '../models/Employee.js'

const createEmployee = async(req,res)=>{
    try{
        const {name, issue, phone} = req.body;
        console.log(req.body)
        const employee = new Employee({
            name,
            issue,
            phone
        });
        await employee.save();
        res.status(201).json(employee)
    }
    catch(err){
        
        console.log("error",err);
        res.status(500).json({message:"server error"});
    }
}

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id)
        res.status(200).json(employee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default {
    createEmployee,
    getEmployees,
    getEmployee
}
