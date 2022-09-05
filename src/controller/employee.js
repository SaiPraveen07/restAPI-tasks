const asyncHandler = require("express-async-handler");
const Employee=require('../models/employee')

const add=asyncHandler(async (req,res)=>{
    const employee=new Employee({
        ...req.body
        
    }) 
     try{
         await employee.save()
         res.status(201).send(employee)
 
     }catch (e){
         res.status(404).send()
 
     }
})

const read=asyncHandler(async(req,res)=>{
    const _id=req.params.id

    try{
        
        const employee=await Employee.findOne({_id,owner:req.user._id})
        if(!employee){
            return res.status(404).send()
        }
        res.send(employee)

    }catch(e){
        res.status(500).send()

    }
})

const update=asyncHandler(async(req,res)=>{
    const updates =Object.keys(req.body)
    const allowedUpdates=['tasks','projectId','name','description','taskId','startdate','enddate','assignee','reportingto','creationdate','updation','createdby','updatedby']
    const isValidOperation=updates.every((update)=>allowedUpdates.includes(update))

    if(!isValidOperation){
         return res.status(500).send({error: 'invalid updates'})
    }
    try{
        const employee=await Employee.findOne({_id:req.params.id})

        //const task=await Task.findByIdAndUpdate(req.params.id)
        
        if(!employee){
          return res.status(404).send()
        }
        updates.forEach((update)=>employee[update]=req.body[update])
        await employee.save()

        res.send(employee)

    }catch (e){
        res.status(500).send()

    }
})

const Del=asyncHandler(async(req,res)=>{
    try{
        
        const employee=await Employee.findOneAndDelete({_id:req.params.id,owner:req.user._id})
        if(!employee){
            res.status(404).send()
        }
        res.send(employee)

    }
    catch(e){
        res.status(500).send()

    }
})
module.exports={
    add,
    read,
    update,
    Del
}