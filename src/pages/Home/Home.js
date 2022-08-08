import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
      <Schedule />
    </Main>
  );
}

const Main = styled.div``;

export default Home;