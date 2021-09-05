import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; // nomalize css
import { useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'; // 글로벌 스타일
import { theme } from 'globalStyles'; // 글로벌 스타일
import { wrapper } from 'store'

import { useDispatch } from 'react-redux';
import { action as userAction } from 'store/modules/userSlice';

import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const { setLoc } = userAction;
    dispatch(setLoc('imagelist'));

    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp);
