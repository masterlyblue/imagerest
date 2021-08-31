import { createTheme } from "@material-ui/core/styles";

// 글로벌 스타일
export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '10px',
        },
      }
    }
  }
})