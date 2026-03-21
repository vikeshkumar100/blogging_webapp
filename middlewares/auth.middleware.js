import jwt from 'jsonwebtoken';

export const verifyLogin=(req,res,next)=>{
    const token=req.cookies.jwt;
    if(!token)
        return res.redirect('/auth/login');
    try{
        jwt.verify(token,"vikesh");
        next();
    }catch(err)
    {
        return res.redirect('/auth/login');
    }
}