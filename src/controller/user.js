const asyncHandler = require("express-async-handler");
const User=require('../models/user')

const register=asyncHandler(async (req,res)=>{
    const user = new User(req.body)
    try {
        await user.save()
        // sendingWelcomeEmail(user.email,user.name);
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

const login=asyncHandler(async(req,res)=>{
    try{
        const user=await User.findByCredentials(req.body.email , req.body.password)
        const token=await user.generateAuthToken()
        res.send({user,token})

    }catch(e){
        res.status(400).send()

    }
})

const logout=asyncHandler(async(req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token!=req.token
        })
        await req.user.save()
        res.send()

    }catch(e){
        res.status(500).send()

    }
})

const logoutall=asyncHandler(async(req,res)=>{
    try{
        req.user.tokens=[]
        req.user.save()
        res.send()

    }catch(e){
        res.status(500).send()

    }
})

const Del=asyncHandler(async(req,res)=>{
    try{
        await req.user.remove()
        sendCancelationEmail(req.user.email,req.user.name)
        res.send(req.user)

    }catch (e){
        res.status(500).send()

    }
})
module.exports={
    register,
    login,
    logout,
    logoutall,
    Del
}