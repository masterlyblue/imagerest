import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './indexStyle';
const useStyles = makeStyles(styles);
import axios from 'axios';
// 리덕스
// 컴포넌트
// 라이브러리

const UploadForm = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('드래그하거나 클릭하여 업로드 ');

  const onHandleImageFile = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setFileName(imageFile.name)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    // image File 은 formData 로 보낸다.
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      console.log({ res });
      alert('Success !');
    } catch (e) {
      console.error(e);
      alert('Fail !');
    }
  }

  const render_uploadform = () => {
    return (
      <div className={classes.uploadform_section}>
        <h2>사진첩</h2>

        <form onSubmit={onSubmit}>
          <div className={classes.uploadform_container}>
            <h2>{fileName}</h2>
            <input
              id='image'
              type='file'
              onChange={onHandleImageFile}
            />
          </div>
          <button className={ classes.uploadfrom_submitButton } type='submit'>제출</button>
        </form>
      </div>
    )
  }

  return (
    <>
      { render_uploadform() }
    </>
  )
}

export default UploadForm;