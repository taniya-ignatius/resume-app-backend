const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRoute=require("./controllers/UserRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Taniya12:TAN12122001@cluster0.vfq897t.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/resume",userRoute)

app.listen(3002)
