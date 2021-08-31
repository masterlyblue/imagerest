import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'; // nomalize css
import { ThemeProvider } from '@material-ui/core/styles'; // 글로벌 스타일
import { theme } from 'globalStyles'; // 글로벌 스타일

function MyApp({ Component, pageProps }) {

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

export default MyApp
