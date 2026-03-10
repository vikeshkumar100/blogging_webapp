import User from "../models/user.model.js";

export const renderSignup=(req,res)=>{
    res.render("signup",{title:"Signup"});
}
export const handleSignup=async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(!user.name || !user.email || !user.password)
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
export const handleLogin=(req,res)=>{
    
}
