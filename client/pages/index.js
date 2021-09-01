import React from 'react';
import UploadForm from 'components/upload';
import Header from 'components/header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  return (
    <>
      <Header />
      <div>
        <ToastContainer />
        <UploadForm />
      </div>
    </>
  )
}

export default Home;