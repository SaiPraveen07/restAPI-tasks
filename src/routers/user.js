const express=require('express')
const router=new express.Router()
const User=require('../models/user')
const auth=require('../middleware/auth')
const {register,login,logout,logoutall,Del}=require('../controller/user')

router.route('/users').post(register)
router.route('/users/login').post(login)
router.route('/users/logout').post(auth,logout)
router.route('/users/logoutAll').post(auth,logoutall)
router.route('users/me').delete(auth,Del)



module.exports=router