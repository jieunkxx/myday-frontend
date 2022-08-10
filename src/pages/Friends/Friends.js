import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Friends() {
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
  return <Main>Friends</Main>;
}

const Main = styled.div`
  width: 726px;
  margin: 40px auto auto;
  border: solid 3px red;
  background-color: #f6efef;
  padding: 10px;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
`;

export default Friends;
