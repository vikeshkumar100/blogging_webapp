import mongoose from 'mongoose';

export const connectToDB=async (url)=>{
    try{
        await mongoose.connect(url);
        console.log("Db connected");
    }catch(err){
        console.log("connection to db failed ,error -",err);
    }
}