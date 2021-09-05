export const styles = {
  imagelist_section: {
    // backgroundColor: 'red',
    // marginTop: '5rem',
    width: '100vw',
    height: '100vh',
  },
  imagelist_container: {
    marginTop: '7rem',
    padding: '0 2rem 0 1rem',

    '@media (max-width: 1024px)': {
      padding: '0 1rem 0 1rem',
    }
  },
  imagelist_upload_button: {
    position: 'fixed',
    right: '2%',
    top: '11%',
    border: 'none',
    backgroundColor: '#fff',
    borderRadius: '50%',
    width: '5rem',
    height: '5rem',
    fontSize: '3rem',
    filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 0px 8px)',
  },
  imagelist_item: {
    columnCount: 5,
    columnGap: 0,

    '@media (max-width: 1024px)': {
      columnCount: 4,
    },
    '@media (max-width: 768px)': {
      columnCount: 3,
    },
    '@media (max-width: 480px)': {
      columnCount: 2,
    },

    '& > div': {
      width: '100%',
      
      '& img': {
        display: 'block',
        width: '100%',
        padding: '2%',
        objectFit: 'cover',
        borderRadius: '1.6rem',
      },
    }

  },
}