
const express = require('express');
const multer = require('multer');
const { v4: uuid } = require('uuid');
const mime = require('mime-types');
const cors = require('cors');
// diskStorage : 파일 저장 과정 제어, 
// cb(callback) : 파일 검증, 현재는 null
// req : request 파일 정보
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

const app = express();
const options = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 201,
}
app.use(cors(options))
const PORT = 5000;

// 외부에서 접근할 수 있게 열어준다.
app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.json(req.file);
});


app.listen(PORT, () => console.log('Express server listening on PORT : ' + PORT))