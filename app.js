import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';

dotenv.config();

const PORT=process.env.PORT || 8000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.use(expressEjsLayouts);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("layout","layout");

app.get('/',(req,res)=>{
    res.send("Hi, this is blogging app");
})
app.get('/blogs',(rew,res)=>{
    res.render('login');
});

app.listen(PORT,()=>{
    console.log("Server is running on port - ",PORT);
})