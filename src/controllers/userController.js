const userModel = require('../models/userModel')



const createUser = async (req,res) =>{
    let body = req.body
    let user = await userModel.findOne({ name: req.body.name})
    if(user){
        return res.send("This Username is already taken")
    } else {
        let newUser = await userModel.create(body)
        return res.send({msg: newUser})
    } 

}


const getUserDetails = async (req,res) => {
    let result = await userModel.find()
    res.send({msg: result})
}

module.exports.createUser = createUser
module.exports.getUserDetails = getUserDetails
