import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generate_jwt_token.js";

export const renderSignup=(req,res)=>{
    res.render("signup",{title:"Signup"});
}
export const handleSignup=async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password)
            return res.status(400).json({msg:"all values are required"});
        await User.create({name,email,password});
        return res.status(200).redirect("/auth/login");
    }catch(err){
        return res.status(500).json({msg:"server error"});
    }
}

export const renderLogin=(req,res)=>{
    res.render("login",{title:"Login"});
}
export const handleLogin=async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password)
            return res.status(400).json({msg:"all values are required"});
        
        const user=await User.findOne({email});
        if(!user)
            return res.status(404).json({msg:"invalid email or password"});

        const check=await bcrypt.compare(password,user.password);
        if(!check)
            return res.status(401).json({msg:"invalid email or password"});

        const token=generateToken(user);
        res.cookie("jwt",token);
        return res.redirect('/');
    }catch(err){
        return res.status(500).json({msg:"server error"});
    }
}

export const handleLogout=(req,res)=>{
    res.clearCookie("jwt");
    return res.redirect("/auth/login");
}