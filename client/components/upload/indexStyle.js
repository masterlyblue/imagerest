export const styles = {
  uploadform_section: {
    backgroundColor: '#eee',
    width: '100vw',
    
  },
  uploadform_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: '7rem',
  },
  item_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '54rem',
    height: '54rem',
    // backgroundColor: 'blue',
    border: '1px solid red',
    borderRadius: '1rem',
  },
  item: {
    display: 'flex',
    // backgroundColor: 'green',
    width: '48rem',
    height: '48rem',
    borderRadius: '2rem',
  },
  image_preview: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '1rem',
  },
  image_field: {
    display: 'flex',
    flex: 5,
    height: '100%',
    width: '100%',
    width: '26rem',
    borderRadius: '8px',
    backgroundColor: '#eee',
    position: 'relative',
    
    '& > div': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontWeight: 700,
      backgroundColor: '#e0e0e0',
      width: '100%',
      height: '100%',

      '& > p': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
      }
    },

    '& > input': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',
      // backgroundColor: 'blue',

    },
    '&:hover': {
      backgroundColor: '#e00000',
      transition: '0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    },
  },
  text_field: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'aqua',
    justifyContent: 'space-between',
    paddingLeft: '2%',
    '& > h3': {
      flex: 2,
      fontSize: '2rem',
    },
    '& > p': {
      flex: 6,
    },

    '& > div': {
      display: 'flex',
      '& h4': {
        paddingLeft: '1rem',
        margin: 0,
      }
    }
  },
  uploadfrom_submitButton: {
    width: '50%',
    height: '4rem',
    marginTop: '1rem',
    border: 'none',
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: 700,
    fontSize: '1.4rem',
    cursor: 'pointer',
  }
}