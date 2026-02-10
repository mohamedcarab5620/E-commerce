const express = require("express")
const router = express.Router()

const contaController = require("../Controller/ContactController")
router.post("/", contaController.create)
module.exports = router