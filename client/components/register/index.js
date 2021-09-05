import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import { styles } from './indexStyles';
const useStyles = makeStyles(styles);
// 리덕스
import { useDispatch } from 'react-redux';
import { action as userAction } from 'store/modules/userSlice';
// 기타
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const RegisterPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState({
    userId: null,
    userName: null,
    userPassword: null,
    userPasswordCheck: null,
  })
  const [passwordError, setPasswordError] = useState(false);

  const render_input_item = (item) => {
    const { name, type, placeholder } = item;
    return (
      <div className={classes.render_input_item}>
        <input name={name} type={type} placeholder={placeholder} onChange={onChangeText} />
        {type === 'password' && passwordError && <div><CustomColorIcon /></div>}
      </div>
    )
  };

  const onChangeText = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  const onSubmit = () => {

    // 패스워드 체크
    if (registerData.userPassword !== registerData.userPasswordCheck) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
    console.log(passwordError)
  }

  const onMoveLoginPage = () => {
    const { setLoc } = userAction;
    dispatch(setLoc('login'))
  }

  return (
    <div className={classes.register_section}>
      <div className={classes.register_container}>
        <h2>ImageRest</h2>
        <div className={classes.register_form}>
          <div>
            <h3>새 계정 만들기</h3>
            <p>포트폴리오용 사이트입니다.</p>
          </div>
          {input_data.map((item, index) => render_input_item(item, index))}
          <button onClick={onSubmit}>가입하기</button>
          <button onClick={onMoveLoginPage}>이미 계정이 있으신가요?</button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;

const input_data = [
  {
    name: 'userId',
    type: 'text',
    placeholder: '휴대폰 번호 또는 이메일 주소',
  },
  {
    name: 'userName',
    type: 'text',
    placeholder: '이름',
  },
  {
    name: 'userPassword',
    type: 'password',
    placeholder: '비밀번호',
  },
  {
    name: 'userPasswordCheck',
    type: 'password',
    placeholder: '비밀번호',
  },
]

const CustomColorIcon = withStyles({
  root: {
    color: 'red',
  }
})(ErrorOutlineIcon)