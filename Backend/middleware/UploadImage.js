const multer = require("multer")

const UploadImage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }

})

const storage = multer({
  storage: UploadImage
})
module.exports = storage