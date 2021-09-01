import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; // nomalize css
import { useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'; // 글로벌 스타일
import { theme } from 'globalStyles'; // 글로벌 스타일
import { wrapper } from 'store'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  // sessionStorage.setItem('useMedia', useMediaQuery(('max-width: 600px')));
  const mediaWidth = useMediaQuery('(max-width:600px)');
  console.log(mediaWidth);
  
  useEffect(() => {
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
