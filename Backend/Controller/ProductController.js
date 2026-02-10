const productmodel = require("../model/product")

const create = async (req , res) =>{
  try{
    const NewProduct = await productmodel.create({
      name: req.body.name,
      image: req.file.filename,
      price: req.body.price,
      desc: req.body.desc
    })
    res.status(201).json(NewProduct)
  }catch(err){
    res.status(200).json({message: err.message})
  }
}

const read = async (req , res) =>{
  try{
    const product = await productmodel.find()
    res.status(200).json(product)
  }catch(err){
    res.status(200).json({message: err.message})
  }
}

const getsingle = async (req , res) =>{
  try{
    const product = await productmodel.findById(req.params.id)
    res.status(200).json(product)
  }catch(err){
    res.status(200).json({message: err.message})
  }
}

const deleteproduct = async(req , res) =>{
  try{
      const deleteProduct = await productmodel.findByIdAndDelete(req.params.id)
      res.status(200).json(deleteProduct)
  }catch(err){
    res.status(200).json({message: err.message})
  }
}

const update = async(req , res) =>{
  try{
    const updateproduct = await productmodel.findByIdAndUpdate(req.params.id , req.body)
    res.status(200).json(updateproduct)
  }catch(err){
    console.log(err)
  }if(req.file){
    try{
      const updateproduct = await productmodel.findByIdAndUpdate(req.params.id , {image: req.file.filename})
      res.status(200).json(updateproduct)
    }catch(err){
      console.log(err)
  }
  }
}

module.exports ={
  create,
  read,
  getsingle,
  deleteproduct,
  update,
}