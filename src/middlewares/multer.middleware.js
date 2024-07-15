import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/tmp')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    // The upper part should be tested in future but for now use the normal  teaching approach

      cb(null, file.originalname)
    }
  })
  
export  const upload = multer({  storage,})