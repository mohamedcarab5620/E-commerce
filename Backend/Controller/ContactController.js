const ContactModel = require("../model/Contact")
const create = async (req , res) =>{
  try{
    const UserContact = await ContactModel.create(req.body)
    res.status(200).json(UserContact)
  }catch(err){
    console.log(err)
  }
}

const readContact = async (req , res) =>{
  try{
    const UserContact = await ContactModel.find()
    res.status(201).json(UserContact)
  }catch(err){
    console.log(err)
  }
}

const  deleteContact = async (req , res) =>{
  try{
    const UserContact = await ContactModel.findByIdAndDelete(req.params.id)
    res.status(200).json(UserContact)
  }catch(err){
    console.log(err)
  }
}



module.exports = {
  create,
  readContact,
  deleteContact
}