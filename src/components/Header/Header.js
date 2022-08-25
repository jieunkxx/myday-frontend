import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Login from '../Login/Login';
import BASE_URL from '../../config';
import { LoginContext } from '../../App';

function Header() {
  const token = localStorage.getItem('token');
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useContext(LoginContext);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const kakaoLogout = async token => {
    try {
      await fetch(`${BASE_URL}/user/kakao/logout`, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
      })
        .then(res => res.json())
        .then(data => {
          localStorage.clear();
          localStorage.removeItem('token');
        });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    await kakaoLogout(token);
    localStorage.clear();
    localStorage.removeItem('token');
    setIsLogin(false);
    //goToHome();
  };
  const userApi = async () => {
    await axios
      .get(`${BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        if (error.response.data === 'jwt_expired') {
          localStorage.removeItem('token');
        }
      });
  };

  useEffect(() => {
    if (isLogin) {
      userApi();
    }
  }, [isLogin]);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        {user ? (
          <UserInfo>
            <Name>
              <span>{user.user_name}</span>
            </Name>
            <Img>
              <img alt="" src={user.user_img} />
            </Img>
          </UserInfo>
        ) : (
          <BeforeLogin />
        )}
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 726px;
  margin: 1px auto auto;
  display: flex;
  align-items: center;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
  background-color: #f9f9f9;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin: auto auto;
  margin: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2px;
`;

const Name = styled.div`
  margin: 0 10px;
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;
const Img = styled.div`
  margin: 0 10px;
  img {
    height: 30px;
    border-radius: 50%;
    border: grey;
  }
`;

const BeforeLogin = styled.div`
  height: 30px;
`;
export default Header;
