import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Friends() {
  const navigate = useNavigate();
  const location = localStorage.getItem('token');

  return <Main>Friends</Main>;
}

const Main = styled.div`
  width: 726px;
  height: 700px;
  margin: auto auto;
  background-color: #fdeceb;
  padding: 0 10px;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
`;

export default Friends;
