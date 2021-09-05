const multer = require('multer');
const { v4: uuid } = require('uuid');
const mime = require('mime-types');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`)
});
const upload = multer({
  storage, fileFilter: (req, file, cb) => {
    // includes 배열에 포함되어 있으면 true
    if (['image/jpeg', 'image/jpeg'].includes(file.mimetype)) cb(null, true)
    else cb(new Error('invalid file type'), false);
  },
  limits: {
    // 5mb 제한
    fileSize: 1024 * 1024 * 5,
  }
});

module.exports = { upload }