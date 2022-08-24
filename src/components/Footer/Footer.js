import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LoginContext } from '../../App';
import Login from '../Login/Login';
import FooterLogin from './FooterLogin';
import FooterMenu from './FooterMenu';
function Footer() {
  const token = localStorage.getItem('token');
  const [isLogin, setIsLogin] = useContext(LoginContext);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const openModal = () => {
    setModal(true);
  };

  return (
    <FooterContainer>
      {isLogin ? <FooterMenu /> : <FooterLogin />}
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 726px;
  display: flex;
  align-items: center;
  color: #bdbdbd;
  margin: auto auto;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
`;

export default Footer;
