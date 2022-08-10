import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../Login/Login';
const user = {
  email: 'test@test.com',
  name: 'tester1',
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdz6QQYO7SjHPl-ruRNK-KbfAKhjQEeOAmg&usqp=CAU',
};
function Header() {
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
    <HeaderContainer>
      <HeaderWrapper>
        <UserInfo>
          <Name>
            <span>{user.name}</span>
          </Name>
          <Img>
            <img src={user.img} />
          </Img>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 726px;
  margin: 1em auto auto;
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
  span {
    font-size: 20px;
  }
`;
const Img = styled.div`
  img {
    height: 30px;
    border-radius: 50%;
    border: grey;
  }
`;

export default Header;
