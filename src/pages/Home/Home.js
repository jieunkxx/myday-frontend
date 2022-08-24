import React, { useEffect, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import MainChart from '../../components/MainChart/MainChart';
import DailySchedule from '../../components/Schedule/DailySchedule';
import { LoginContext } from '../../App';
import { currDate } from '../../utils/updateCurr';
import SignUp from '../SignUp/SignUp';
function Home() {
  const today = new Date();
  const [date, setDate] = useState(currDate);
  const navigate = useNavigate();
  const location = useLocation();
  let tokenInRef = new URL(window.location.href).searchParams.get('token');
  const [token, setToken] = useState(tokenInRef);
  const [isLogin, setIsLogin] = useContext(LoginContext);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setIsLogin(true);
      navigate('./');
    }
    // else if (localStorage.getItem('token')) {
    //   setIsLogin(true);
    // } else {
    //   setIsLogin(false);
    // }
  }, [token, localStorage.getItem('token')]);

  return isLogin ? (
    <Main>
      <MainChart date={date} setDate={setDate} />
      <DailySchedule date={date} />
    </Main>
  ) : (
    <SignUp />
  );
}

const Main = styled.div`
  width: 726px;
  height: 700px;
  margin: auto auto;
  background-color: #fdeceb;
  padding: 0 10px;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
  overflow-y: auto;
  overflow-x: hidden;
  /* Designing for scroll-bar */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  /* Handle */
  //::-webkit-scrollbar-thumb {
  //  background: black;
  //  border-radius: 5px;
  //}

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default Home;
