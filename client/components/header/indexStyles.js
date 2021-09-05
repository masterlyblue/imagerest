export const styles = {
  header_section: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 100,
  },
  header_container: {
    display: 'flex',
    height: '7rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',

    '& > div:nth-child(1)': {
      '& > input': {
        width: '5.4rem',
        border: 'none',
        backgroundColor: '#fff',
        // '& > img': {
          // width: '100%',
        // },
      },
    },
    '& > div:nth-child(2)': {
      width: '80%',
      '& > input': {
        height: '3.8rem',
        backgroundColor: '#eee',
        border: 'none',
        borderRadius: '1.6rem',
        width: '100%',
      }
    },
    '& > div:nth-child(3)': {
      display: 'flex',
      '& > button': {
        marginLeft: '1rem',
        border: 'none',
        backgroundColor: '#fff',
        width: '8rem',
        fontSize: '1.6rem',
        fontWeight: 700,
        cursor: 'pointer',
        '&:hover': {
          color: '#424242'
        }
      },
      '& > button:nth-child(1)': {
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: '10rem',
        height: '4rem',
      },
      '& > button:nth-child(2)': {
        backgroundColor: '#eee',
        color: '#9e9e9e',
        borderRadius: '10rem',
        height: '4rem',
      },
    },
  },
}