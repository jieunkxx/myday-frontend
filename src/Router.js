import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderTop from './components/Header/HeaderTop';
import HeaderBottom from './components/Header/HeaderBottom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Myday from './pages/Myday/MyDay';
import Budget from './pages/Budget/Budget';
import Friends from './pages/Friends/Friends';
//import SignUp from './pages/SignUp/SignUp';
//import KakaoLogin from './components/Login/KakaoLogin';

function Router() {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <BrowserRouter>
      <ScrollTop />
      <HeaderTop />
      <HeaderBottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/oauth/kakao/callback" element={<KakaoLogin />} />
        <Route path="/myday" element={<MyDay />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
