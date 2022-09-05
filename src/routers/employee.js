const express=require('express')
const router=new express.Router()
const Employee=require('../models/employee')
const auth=require('../middleware/auth')
const {add,read,update,Del}=require('../controller/employee')

router.route('/persons').post(auth,add)
router.route('/persons/:id').get(auth,read)
router.route('/persons/:id').patch(auth,update)
router.route('/persons/:id').delete(auth,Del)






module.exports=router