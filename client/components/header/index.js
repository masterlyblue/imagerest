import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './indexStyles';
const useStyles = makeStyles(styles);
// 리덕스
import { useDispatch, useSelector } from 'react-redux';
import { action as userAction, selector as userSelector } from 'store/modules/userSlice';
// 컴포넌트
// 라이브러리
// 기타

const UploadForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userLocation } = useSelector(userSelector.all);
  const [scroll, setScroll] = useState(false);
  const isLoggedIn = false;

  const onhandleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scroll > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    return;
  }

  useEffect(() => {
    window.addEventListener('scroll', onhandleScroll)
    return () => window.removeEventListener('scroll', onhandleScroll)
  })

  const onClickLocation = (e) => {
    const { setLoc } = userAction;
    dispatch(setLoc(e.target.value));
  }

  const renderUserLocation = () => {
    switch (userLocation) {
      case 'register':
        return <button value='login'>로그인</button>
      case 'login':
        return <button value='register'>회원가입</button>
      default:
        return (
          <>
            <button value='login'>로그인</button>
            <button value='register'>회원가입</button>
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
          {isLoggedIn && <div>프로필</div>}
          {renderUserLocation()}
        </div>
      </div>
    </div>
  )
}

export default UploadForm;