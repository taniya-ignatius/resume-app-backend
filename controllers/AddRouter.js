const express=require("express")
const router=express.Router()

const AddModel=require("../model/AddModel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new AddModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let result=await AddModel.find()
    .populate("userid", "name age mobile address pin -_id")
    .exec()
    res.json(result)
})

module.exports=router

