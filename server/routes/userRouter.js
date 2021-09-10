const { Router } = require('express');
const User = require('../models/user');
const userRouter = Router();
const { hash, compare } = require('bcryptjs');
const mongoose = require('mongoose');

// 회원가입
userRouter.post('/register', async (req, res) => {
  try {
    if (req.body.password.length < 6) {
      res.status(400).json({ message: '비밀번호 최소를 최소 6자 이상으로 입력해 주세요.' })
    }

    if (req.body.username.length < 3) {
      res.status(400).json({ message: '유저이름을 3자 이상으로 입력해 주세요.' })
    }

    const hashedPassword = await hash(req.body.password, 10);
    const user = await new User({
      name: req.body.name,
      username: req.body.username,
      hashedPassword: hashedPassword,
      sessions: [{ createAt: new Date() }]
    }).save()
    const session = user.sessions[0];

    res.json({ message: 'user regitser', sessionId: session._id, name: user.name })
  } catch (e) {
    console.warn(e.message)
    res.status(400).json({ message: e.message })
  }
})

// 로그인
userRouter.patch('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.name });
    const isValid = await compare(req.body.password, user.hashedPassword); // 비밀번호 조회

    if (!isValid) throw new Error('입력하신 정보가 올바르지 않습니다.');

    user.sessions.push({ createAt: new Date });
    await user.save();
    const session = user.sessions[user.sessions.length - 1]

    res.json({
      message: 'user validated',
      sessionId: session._id,
      name: user.name
    })
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: e.message })
  }
})

// 로그아웃
userRouter.patch('/logout', async (req, res) => {
  try {
    console.log('req:',req.headers.sessionid);
    if (!req.user) throw new Error('invalid sessionid')

    await User.updateOne(
      { // 아이디를 찾아서
        _id: req.user.id
      },
      { // 배열 수정시 pull: sessions 에서 _id: ssesionid 와 같다면
        $pull: { sessions: { _id: req.headers.sessionid } }
      })

    res.json({ message: 'user is logged out ' });
  } catch (e) {
    console.log(e)
    res.status(400).json({ message: e.meesage })
  }
})

module.exports = { userRouter }