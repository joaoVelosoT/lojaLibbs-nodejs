const {Router} = require("express")
const multer = require('multer')

const storage = multer.memoryStorage();

const upload = multer({storage : storage});

const UploadController = require('../controller/UploadController')

const router = Router()

router.post('/upload', upload.single('image'), (req,res) => (
    UploadController.uploadImage(req,res)    
));

router.get('/images', (req,res) => (
    // res.send("oi")
    UploadController.listImages(req,res)
))

router.get('/:imageName', (req,res) =>(
    UploadController.getImage(req,res)
));

router.get("/html", (req,res)=>{
    res.sendFile("index.html")
})

module.exports = router;