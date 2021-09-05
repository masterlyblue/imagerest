require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { imageRouter } = require('./routes/imageRouter');
const { userRouter } = require('./routes/userRouter');

const { authenticate } = require('./middleware/authentication');

// diskStorage : 파일 저장 과정 제어, 
// cb(callback) : 파일 검증, 현재는 null
// req : request 파일 정보

const app = express();
const options = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 201,
}
app.use(cors(options))
const PORT = 5000;

// 몽고 디비 연결.
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // 외부에서 접근할 수 있게 열어준다.
    app.use('/uploads', express.static('uploads'));
    app.use(express.json())

    app.use(authenticate);
    
    app.use('/images', imageRouter);
    app.use('/users', userRouter);

    app.listen(PORT, () => console.log('Express server listening on PORT : ' + PORT))
    console.log('MongoDB Connected')
  })
  .catch((e) => console.log(e))
