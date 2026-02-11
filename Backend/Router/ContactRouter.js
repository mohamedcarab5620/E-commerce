const express = require("express")
const router = express.Router()

const contaController = require("../Controller/ContactController")
router.post("/", contaController.create)
router.get("/", contaController.readContact)
router.delete("/:id", contaController.deleteContact)
module.exports = router
