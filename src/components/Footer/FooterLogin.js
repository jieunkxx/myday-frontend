import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../Login/Login';

function Footer() {
  const [token, setToken] = useState();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const openModal = () => {
    setModal(true);
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <FooterContainer>
      {modal && <Login openModal={openModal} setModal={setModal} />}
      <FooterWrapper>
        <FooterTop>
          <div>
            <LoginButton onClick={openModal}>Social Login</LoginButton>
          </div>
        </FooterTop>
      </FooterWrapper>
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

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  padding: 30px 5px;
  background-color: #f9f9f9;
`;

const FooterTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 2px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
  }
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  color: white;
  padding: 1em 5em;
  background-color: #bdd5f7;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export default Footer;
