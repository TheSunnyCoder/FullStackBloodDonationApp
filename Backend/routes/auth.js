const express=require('express');
const { loginUser, registerUser } = require('../controllers/auth');
const router=express.Router();
//REGISTER ROUTER
router.post("/login",loginUser);
//login router

router.post("/register",registerUser);

module.exports=router;