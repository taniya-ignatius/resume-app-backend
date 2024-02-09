const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {   
        name:String,
        emailid:String,
        password:String,
        mobile:String,
        place:String
    }
)
module.exports=mongoose.model("users",userSchema)