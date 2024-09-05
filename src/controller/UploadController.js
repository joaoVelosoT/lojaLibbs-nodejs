const multer = require('multer')
const sharp = require('sharp')
const fs = require('fs'); // file system
const path = require('path')
const UploadController = {
    uploadImage: async (req,res) => {
        // Pegando o nome da imagem
        // ex : imagem.png
        const imageName = req.file.originalname;

        // Pegando os dados da imagem
        const imageData = req.file.buffer;

        // salvar a imagem original no disco
        await sharp(imageData).toFile(`uploads/${imageName}`);
        
        return res.status(200).json({
            msg : 'Imagem salva com sucesso !',
            status : 200
        })
    },

    listImages : async (req,res) => {
        fs.readdir('uploads/', (err, files) => {
            if (err) {
                return res.status(500).json({msg : "Erro ao listar imagens"})
            }
            console.log(files)
            const images = files.filter(
                (file) => 
                    file.endsWith(".jpg") ||
                    file.endsWith(".PNG") ||
                    file.endsWith(".jpg")
            )
            res.send(images);
        });
    },

    getImage : (req,res) => {
        const imageName = req.params.imageName;
        console.log("teste",imageName);
        
        const imagePath = path.join(__dirname, '..','..', 'uploads', imageName);
        console.log("path",imagePath)
        return res.sendFile(imagePath);
    }
}


module.exports = UploadController;