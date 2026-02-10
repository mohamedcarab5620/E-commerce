const ContactModel = require("../model/Contact")
const create = async (req , res) =>{
  try{
    const UserContact = await ContactModel.create(req.body)
    res.status(200).json(UserContact)
  }catch(err){
    console.log(err)
  }
}
module.exports = {
  create
}