import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});

userSchema.pre("save",async function(){
    if(!this.isModified("password"))
        return;
    const hashpwd=await bcrypt.hash(this.password,8);
    this.password=hashpwd;
});


const User=mongoose.model('user',userSchema);

export default User;