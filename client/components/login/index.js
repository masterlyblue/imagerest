import React from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './indexStyles';
const useStyles = makeStyles(styles);

const LoginPage = () => {
  const classes = useStyles();
  
  return <h2>로그인페이지</h2>
}

export default LoginPage;