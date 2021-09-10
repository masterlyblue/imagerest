import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import { styles } from './indexStyles';
const useStyles = makeStyles(styles);
// 리덕스
import { useDispatch } from 'react-redux';
import { action as userAction } from 'store/modules/userSlice';
// 기타
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    userId: null,
    userPassword: null,
  })

  const render_input_item = (item, index) => {
    const { name, type, placeholder } = item;
    return (
      <div className={classes.render_input_item} key={'1'+index}>
        <input name={name} type={type} placeholder={placeholder} onChange={onChangeText} />
      </div>
    )
  };

  const onChangeText = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const onSubmit = async () => {
    try {
      const result = await axios.patch('http://localhost:5000/users/login', {
        name: registerData.userId,
        password: registerData.userPassword
      })
      toast.success('로그인 성공')
      const { setLoc, setId } = userAction;
      sessionStorage.setItem('userId', result.data.name)
      sessionStorage.setItem('sessionId', result.data.sessionId)
      dispatch(setId(result.data.sessionId))
      dispatch(setLoc('imagelist'))
    } catch (e) {
      console.warn(e);
      toast.error(e.message);
    }
  }

  const onMoveLoginPage = () => {
    const { setLoc } = userAction;
    dispatch(setLoc('login'))
  }

  return (
    <div className={classes.login_section}>
      <div className={classes.login_container}>
        <h2>ImageRest</h2>
        <div className={classes.login_form}>
          <div>
            <h3>로그인</h3>
            <p>포트폴리오용 사이트입니다.</p>
          </div>
          {input_data.map((item, index) => render_input_item(item, index))}
          <button onClick={onSubmit}>로그인</button>
          <button onClick={onMoveLoginPage}>계정이 없으신가요?</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;

const input_data = [
  {
    name: 'userId',
    type: 'text',
    placeholder: '휴대폰 번호 또는 이메일 주소',
  },
  {
    name: 'userPassword',
    type: 'password',
    placeholder: '비밀번호',
  },
]

const CustomColorIcon = withStyles({
  root: {
    color: 'red',
  }
})(ErrorOutlineIcon)