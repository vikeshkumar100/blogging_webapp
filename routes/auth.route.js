import express from "express";
import { handleLogin, handleLogout, handleSignup, renderLogin, renderSignup } from "../controllers/auth.controller.js";

const router=express.Router();

router.route('/signup')
    .get(renderSignup)
    .post(handleSignup);

router.route('/login')
    .get(renderLogin)
    .post(handleLogin);

router.get('/logout',handleLogout);

export default router;
