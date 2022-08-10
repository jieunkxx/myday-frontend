import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainChart from '../../components/MainChart/MainChart.js';
import DailySchedule from '../../components/Schedule/DailySchedule';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  let token = new URL(window.location.href).searchParams.get('token');
  let auth;

  useEffect(() => {
    if (token) {
      navigate('./', {
        state: { token: token },
      });
    }
  }, [token]);

  if (location?.state?.token) {
    auth = location.state.token;
    localStorage.setItem('token', location.state.token);
  }
  return (
    <Main>
      <MainChart />
      <DailySchedule />
    </Main>
  );
}

const Main = styled.div`
  width: 726px;
  height: 700px;
  margin: auto auto;
  background-color: #fdeceb;
  padding: 0 10px;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
`;

export default Home;
