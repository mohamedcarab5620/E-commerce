const express = require("express")
const router = express.Router()
const productController = require("../Controller/ProductController")
const Upload = require("../middleware/UploadImage")
router.post("/", Upload.single("image"), productController.create)
router.get("/", productController.read)
router.get("/:id", productController.getsingle)
router.delete("/:id", productController.deleteproduct)
router.put("/:id", Upload.single("image"), productController.update)

module.exports = router
