import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './indexStyles';
const useStyles = makeStyles(styles);
// 리덕스
// 컴포넌트
// 라이브러리

const UploadForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.header_section}>
      <div className={classes.header_container}>
        <div>
          <h2>로고</h2>
        </div>
        <div>
          <label>검색창</label>
          <input></input>
        </div>
        <div>
          <div>프로필</div>
        </div>
      </div>
    </div>
  )
}

export default UploadForm;