const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({ //forma como o multer faz o upload de imagens
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //informando qual pasta sera salvo as imgs
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null, `${name}-${Date.now()}${ext}`)
        }
    }),
};