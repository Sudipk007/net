const User = require('./User')
const Message = require('./message')
const {setUser,getUser} = require('../service/auth')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')


const createUseer = async (req,res)=>{
    try{
        console.log('u enter')
        const {fullName,email,password} = req.body;
        await User.create({
            Fullname:fullName,
            email,
            password,
            

        })
        return res.status(401).json({messsage:'Invalid password or email'})

    }
    catch(err){
        console.log(err)
    }
   
}

const sendMessage = async (req,res)=>{
    
    const {Fullname , email , message} =req.body;
    console.log(req.ip)

    await Message.create({
        Fullname:Fullname,
        email:email,
        message:message,

        
    })
    return res.status(200).json({messsage:'Success'})
    
}

async function checkAuth(req,res,next){
    console.log("checkAuth called")
    const token = req.cookies.uid
    try {
      const user = getUser(token)
      req.user = user
      next();
    } catch {
      res.status(403).json({ message: "Invalid token" })
    }
    
    

}

const loginuser= async (req,res)=>{
    const {email,password}=req.body;

    const user = await User.findOne({email,password})

    if(!user) { 
        return res.status(401).json({message:'not verified'})
        
    }
    const token = setUser(user);

    res.cookie("uid", token, {
        httpOnly: true,
        secure: false,        // true in production
        sameSite: "lax",
        maxAge: 15 * 60 * 1000
      })

    
      res.status(200).json({ success: true })

    
    
}

const showMessage = async (req,res)=>{
    const email = req.user.email;
    const user = await User.findOne({email})
    console.log(user.Fullname)
    res.status(200).json({fullname:user.Fullname})

}


const FAQ = async(req,res)=>{
    
}
module.exports= {createUseer,loginuser,sendMessage,checkAuth,showMessage}