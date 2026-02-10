const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

const productRouter = require("./Router/ProductRouter")
app.use("/product", productRouter)
app.use("/allimages", express.static("image"))

const contaRouter = require("./Router/ContactRouter")
app.use("/contact", contaRouter)

mongoose.connect("mongodb://localhost:27017/last123").then(() =>{
  console.log("connected")
}).catch((err) =>{
  console.log(err)
})
app.listen(7000, () =>{
  console.log("running")
})