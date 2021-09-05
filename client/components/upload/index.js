import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { styles } from './indexStyle';
const useStyles = makeStyles(styles);
import axios from 'axios';
// 리덕스
import { useDispatch, useSelector } from 'react-redux';
// 컴포넌트
import ProgressBar from 'components/ProgressBar';
// 라이브러리
import { toast } from 'react-toastify';

const UploadForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [fileName, setFileName] = useState('드래그하거나 클릭하여 업로드 ');

  const [percent, setPercent] = useState(0);

  // 파일 받기
  const onHandleImageFile = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setFileName(imageFile.name)

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (e) => setImgSrc(e.target.result);
  }

  // 파일 전송
  const onSubmit = async (e) => {
    e.preventDefault();
    // image File 은 formData 로 보낸다.
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/images', formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) => {
          setPercent(Math.round((100 * e.loaded) / e.total));
        },
      })
      toast.success('이미지 업로드 성공 !');
      setTimeout(() => {
        setPercent(0);
        setImgSrc(null);
      }, 3000)
    } catch (e) {
      console.error(e);
      setPercent(0)
      setImgSrc(null);
      toast.error('이미지 업로드 실패 !');
    }
  }

  console.log(percent)

  const render_uploadform = () => {
    return (
      <div className={classes.uploadform_section}>
        <div className={classes.uploadform_container}>
          <button className={classes.uploadfrom_submitButton} onClick={onSubmit}>게시</button>
          <ProgressBar percent={percent} />

          <div className={classes.item_container}>
            <div className={classes.item}>
              <form>
                <div className={classes.image_field}>
                  <div>
                    {imgSrc
                      ? <img className={classes.image_preview} src={imgSrc} />
                      : <p>이미지를 업로드 해주세요</p>
                    }
                  </div>
                  <input
                    id='image'
                    type='file'
                    accept='image/*'
                    onChange={onHandleImageFile}
                  />
                </div>
              </form>

              <div className={classes.text_field}>
                <h3>제목 추가</h3>
                <div>
                  <div>프로필</div>
                  <h4>NickName</h4>
                </div>
                <p>이미지 설명</p>
                <p>출저 링크</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

  return (
    <>
      {render_uploadform()}
    </>
  )
}

export default UploadForm;