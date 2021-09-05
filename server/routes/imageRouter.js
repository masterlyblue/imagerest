const { Router } = require('express');
const imageRouter = Router();

const Image = require('../models/image');
const { upload } = require('../middleware/imageUpload');

// 이미지 업로드ㅜ
imageRouter.post('/', upload.single('image'), async (req, res) => {
  const image = await new Image({
    key: req.file.filename,
    originalFileName: req.file.originalname,
  }).save()
  res.json(image);
});

// 이미지 정보 불러오기
imageRouter.get('/', async (req, res) => {
  console.log('요청')
  const images = await Image.find()
  res.json(images);
})

module.exports = { imageRouter }