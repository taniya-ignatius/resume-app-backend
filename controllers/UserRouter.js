const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

const userModel = require("../model/UserModel")
router.post("/signup", async (req, res) => {

    let { data } = { "data": req.body }
    let password = data.password
    const hashedPassword = await hashPasswordGenerator(password)
    data.password = hashedPassword
    let resume = new userModel(data)
    let result = await resume.save()
    res.json({
        status: "success"
    })

})

router.post("/signin", async (req, res) => {
    let input = req.body
    let emailid = req.body.emailid
    let data = await userModel.findOne({ "emailid": emailid })
    if (!data) {
        return res.json({
            status: "Invalid user"
        })
    }
    console.log(data)
    let dbPassword = data.password
    let inputPassword = req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match = await bcrypt.compare(inputPassword, dbPassword)
    if (!match) {
        return res.json({
            status: "Invalid password"
        })
    }
    res.json({
        status: "success"
    })
})


module.exports = router