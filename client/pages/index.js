import React from 'react';
// 리덕스
import { useSelector } from 'react-redux';
import { selector as userSelector } from 'store/modules/userSlice';
// 컴포넌트
import Header from 'components/header';
import ImageList from 'components/imagelist';
import UploadForm from 'components/upload';
import LoginPage from 'components/login';
import RegisterPage from 'components/Register';
// 라이브러리
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// 기타

const Home = () => {
  const { userLocation } = useSelector(userSelector.all);

  const renderPage = () => {
    switch (userLocation) {
      case 'imagelist':
        return <ImageList />
      case 'uploadform':
        return <UploadForm />
      case 'register':
        return <RegisterPage />
      case 'login':
        return <LoginPage />
      default:
        console.warn('잘못된 페이지로 접속하셨습니다.')
        break;
    }
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <div>
        {renderPage()}
      </div>
    </>
  )
}

export default Home;

