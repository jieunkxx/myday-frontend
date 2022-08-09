import React, { useState, useEffect, useContext } from 'react';
import {
  useNavigate,
  Link,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import styled from 'styled-components';
import Login from '../Login/Login';
import { LoginContext } from '../../App';
import BASE_URL from '../../config';
import * as oAuth from '../Login/OAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faN, faB } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faYoutube,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
library.add(faN, faB, faInstagram, faYoutube, faFacebookF);

function Footer() {
  const [token, setToken] = useState();
  const [isLogin, setIsLogin] = useContext(LoginContext);
  const [email, setEmail] = useState('');

  const [modal, setModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollToggle, setScrollToggle] = useState(false);
  const [text, setText] = useState('');
  const [query, setQuery] = useSearchParams();
  const searchParams = new URLSearchParams(query);
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
  display: flex;
  align-items: center;
  color: #bdbdbd;
  min-width: 726px;
  margin: auto auto;
  border: 2px solid blue;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
`;

const FooterWrapper = styled.div`
  width: 660;
  margin: 2em auto auto;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2px;
`;

const LoginButton = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: white;
  padding: 1em 5em;
  background-color: #bdd5f7;
`;

export default Footer;
