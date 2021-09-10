import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './indexStyles';
const useStyles = makeStyles(styles);
// 리덕스
import { useDispatch, useSelector } from 'react-redux';
import { action as userAction, selector as userSelector } from 'store/modules/userSlice';
import { toast } from 'react-toastify';
import axios from 'axios';
// 컴포넌트
// 라이브러리
// 기타

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userLocation, sessionId } = useSelector(userSelector.all);
  const [scroll, setScroll] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onhandleScroll = () => {
    setScroll(scroll > 80);
  }

  useEffect(() => {
    window.addEventListener('scroll', onhandleScroll)
    return () => window.removeEventListener('scroll', onhandleScroll)
  })

  const onClickLocation = (e) => {
    const { setLoc } = userAction;
    dispatch(setLoc(e.target.value));
  }

  const onClickLogout = async () => {
    console.log(isLoggedIn)
    try {
      await axios.patch('http://localhost:5000/users/logout', {}, {
        headers: { sessionid: sessionId }
      })
      sessionStorage.removeItem('userId')
      sessionStorage.removeItem('sessionId')
      setIsLoggedIn(false);
      setUserId('');
      toast.success('로그아웃')
    } catch (e) {
      toast.error(e.message)
    }
  }

  const renderUserLocation = () => {
    switch (userLocation) {
      case 'register':
        return <button className={classes.idleButton} value='login'>로그인</button>
      case 'login':
        return <button className={classes.idleButton} value='register'>회원가입</button>
      default:
        return (
          <>
            <button className={classes.idleButton} value='login'>로그인</button>
            <button className={classes.idleButton} value='register'>회원가입</button>
          </>
        )
    }
  };

  return (
    <div className={classes.header_section}>
      <div
        className={classes.header_container}
        onClick={(e) => onClickLocation(e)}
      >
        <div>
          {/* 로고 */}
          <input type='image' value='imagelist' src='logo.png' />
        </div>

        <div>
          {/* 검색창 */}
          <input></input>
        </div>

        <div>
          {/* 네비게이션 */}
          {isLoggedIn && <button value='imagelist' className={classes.activeButton} onClick={onClickLogout}>{userId}로그아웃</button>}
          {!isLoggedIn && renderUserLocation()}
        </div>
      </div>
    </div>
  )
}

export default Header;