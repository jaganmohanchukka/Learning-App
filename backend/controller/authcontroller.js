import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
import bcrypt from 'bcrypt'
dotenv.config();
const createUser = async(req,res)=>{
    try{
        const {name, age, email, phone, password} = req.body;
        const salt = await bcrypt.genSalt();
        const hashedpassword = await bcrypt.hash(password,salt);
        const user = new User({
            name,
            age,
            email,
            phone,
            password: hashedpassword
        });
        await user.save();
        res.status(201).json(user)
    }
    catch(err){
        
        console.log("error",err);
        res.status(500).json({message:"server error"});
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
        return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.SECRET_TOKEN,   
            { expiresIn: "1h" }
        );

        res.json({ message: "Login successful", accessToken : token , user: { id: user._id, name: user.name, email:user.email } });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error" });
    }
}
export default{
        loginUser,
        createUser
}