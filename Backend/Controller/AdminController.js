const adminModel= require("../model/Admin")
const create = async (req , res) =>{
  try{
    const admin = await adminModel.create(req.body)
    res.status(200).json(admin)
  }catch(err){
    console.log(err)
  }
}

const login = async (req , res) =>{
  try{
    const admin = await adminModel.findOne({
      email: req.body.email,
      password: req.body.password
    })
    res.status(200).json(admin)
  }catch(err){
    console.log(err)
  }
}
module.exports = {
  create,
  login
}