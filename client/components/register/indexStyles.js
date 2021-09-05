export const styles = {
  register_section: {
    backgroundColor: '#eee',
    height: '100vh',
  },
  register_container: {
    marginTop: '7rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  register_form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '0.4rem',
    width: '32rem',
    height: '44rem',
    padding: '0 1.6rem',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1)',

    '& > div:first-child': {
      display: 'flex',
      flexDirection: 'column',
      margin: '4rem 0 3rem 0',
      textAlign: 'center',
      '& > h3': {
        fontSize: '2rem',
        margin: 0,
      },
      '& > p': {
        margin: 0,
        fontSize: '1.4rem',
        color: '#9e9e9e',
      }
    },
    '& > *': {
      marginTop: '1rem',
      borderRadius: '0.6rem',
      width: '100%',
      height: '3.6rem',

    },

    '& > button': {
      marginTop: '2rem',
      width: '100%',
      backgroundColor: 'red',
      color: '#fff',
      border: '1px solid #e0e0e0',
      fontWeight: 700,
      cursor: 'pointer',
    },

    '& > button:nth-child(7)': {
      backgroundColor: '#fff',
      marginTop: '0.4rem',
      border: 'none',
      color: '#9e9e9e',

      '&:hover': {
        color: '#828282'
      }
    }
  },

  render_input_item: {
    margin: '0.4rem 0 0 0 !important',
    display: 'flex',
    position: 'relative',
    '& > input': {
      width: '100%',
      border: '1px solid #e0e0e0',
      backgroundColor: '#fff',
      paddingLeft: '1rem',
      borderRadius: '1rem',
      height: '3.4rem',
      '&::placeholder': {
        color: '#9e9e9e',
      },
    },
    '& > div': {
      position: 'absolute',
      right: 0,
    }
  }
}
