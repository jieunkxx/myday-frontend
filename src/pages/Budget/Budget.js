import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BudgetHeader from '../../components/Budget/BudgetHeader';
import Edit from '../../components/Budget/Edit';
import { LoginContext } from '../../App';

function Budget() {
  const [isLogin, setIsLogin] = useContext(LoginContext);

  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const goToSignUp = () => {
    navigate('/signup');
  };
  return isLogin ? (
    <Main>
      <BudgetHeader />
      <Edit />
    </Main>
  ) : (
    goToSignUp()
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

export default Budget;
