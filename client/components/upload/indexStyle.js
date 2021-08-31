export const styles = {
  uploadform_section: {
    backgroundColor: '#fff',
  },
  uploadform_container: {
    height: '40rem',
    border: '1px dashed #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#eee',
    position: 'relative',

    '& > h2': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -120%)',
      fontWeight: 700,
    },

    '& > input': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0,
      cursor: 'pointer',

    },
    '&:hover': {
      backgroundColor: '#e0e0e0',
      transition: '0.5s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    },
  },

  uploadfrom_submitButton: {
    width: '100%',
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