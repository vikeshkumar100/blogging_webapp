import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import { connectToDB } from './connection.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const PORT=process.env.PORT || 8000;
const app=express();
await connectToDB("mongodb://127.0.0.1:27017/blogApp");

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("layout","layout");

app.get('/',(req,res)=>{
    res.send("Hi, this is blogging app");
})
app.use('/auth',authRouter);

app.listen(PORT,()=>{
    console.log("Server is running on port - ",PORT);
})