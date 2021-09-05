import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './indexStyles';
const useStyles = makeStyles(styles);
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { action as userAction } from 'store/modules/userSlice';

const ImageList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/images')
      .then((result) => setImages(result.data))
      .catch((e) => console.warn(e))
  }, [])

  const onClickUpload = () => {
    const { setLoc } = userAction;
    dispatch(setLoc('uploadform'))
  }

  const imgList = images.map((image) => (
    <img key={image.key} src={`http://localhost:5000/uploads/${image.key}`} />
  ))

  return (
    <div className={classes.imagelist_section}>
      <div className={classes.imagelist_container}>
        <button className={classes.imagelist_upload_button} onClick={onClickUpload}>+</button>
        {/* {images ?? images.map((item, index) => renderImage(item, index))} */}
        <div className={classes.imagelist_item} >
          <div>
            {imgList}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImageList;