export const styles = {
  header_section: {
    position: 'fixed',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 100,
  },
  header_container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 2rem',
    alignItems: 'center',

    '& > div:nth-child(1)': {
      '& > h2': {
        color: 'red',
      }
    },
    '& > div:nth-child(2)': {

    },
    '& > div:nth-child(3)': {

    },
  },

}