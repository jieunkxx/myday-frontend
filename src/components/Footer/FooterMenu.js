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
import { Home, UserFriends } from '@styled-icons/fa-solid';
import { ChartPie } from '@styled-icons/heroicons-outline/ChartPie';
import { CardChecklist } from '@styled-icons/bootstrap/CardChecklist';

function FooterMenu() {
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

  const goToSchedule = () => {
    navigate('/schedule');
  };

  const goToBudget = () => {
    navigate('/budget');
  };

  const goToFriends = () => {
    navigate('/signup');
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterTop>
          <div>
            <FooterIcon>
              <Home onClick={goToHome} />
            </FooterIcon>
            <IconTitle>Home</IconTitle>
          </div>
          <div>
            <FooterIcon>
              <CardChecklist onClick={goToSchedule} />
            </FooterIcon>
            <IconTitle>Schedule</IconTitle>
          </div>
          <div>
            <FooterIcon>
              <ChartPie onClick={goToBudget} />
            </FooterIcon>
            <IconTitle>Budget</IconTitle>
          </div>
          <div>
            <FooterIcon>
              <UserFriends onClick={goToFriends} />
            </FooterIcon>
            <IconTitle>Friends</IconTitle>
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
  margin: auto auto;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
`;

const FooterWrapper = styled.div`
  width: 728px;
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
    opacity: 0.5;
    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

const FooterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  color: black;
`;

const IconTitle = styled.span`
  text-align: center;
  background-color: none;
  font-size: 15px;
  color: black;
  padding-top: 10px;
  padding-bottom: 2px;
`;
export default FooterMenu;
