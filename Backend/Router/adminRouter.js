const express = require("express")
const router = express.Router()
const adminController = require("../Controller/AdminController")
router.post("/" , adminController.create)
router.post("/login", adminController.login)
module.exports = router
