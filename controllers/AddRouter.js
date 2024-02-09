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


module.exports=router

