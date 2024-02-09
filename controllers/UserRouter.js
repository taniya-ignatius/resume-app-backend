const express=require("express")
 const router=express.Router()
 const bcrypt=require("bcryptjs")

 hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
 }

const userModel=require("../model/UserModel")
router.post("/signup",async(req,res)=>{

    let {data}={"data":req.body}
    let password=data.password
    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword
    let resume=new userModel(data)
    let result=await resume.save()
    res.json({
        status:"success"
    })

})



 module.exports=router