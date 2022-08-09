import React, { useState, useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginContext } from './App';
import Home from './pages/Home/Home';
import Schedule from './pages/Schedule/Schedule';
import Budget from './pages/Budget/Budget';
import Friends from './pages/Friends/Friends';
import SignUp from './pages/SignUp/SignUp';
import KakaoLogin from './components/Login/KakaoLogin';
import Footer from './components/Footer/Footer';
import FooterMenu from './components/Footer/FooterMenu';

function Router() {
  const [isLogin, setIsLogin] = useContext(LoginContext);
  console.log('isLogin: ', isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
      {isLogin ? <FooterMenu /> : <Footer />}
    </BrowserRouter>
  );

  //       <Route path="/oauth/kakao/callback" element={<KakaoLogin />} />
}

export default Router;
