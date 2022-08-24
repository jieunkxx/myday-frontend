import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

import axios from 'axios';
import styled from 'styled-components';
import { NavigateBefore, NavigateNext } from '@styled-icons/material';
import CurrentDate from '../../components/Schedule/CurrentDate';
import Details from '../../components/Schedule/Details';
import BASE_URL from '../../config';
import { currDate } from '../../utils/updateCurr';
import { LoginContext } from '../../App';
function Schedule() {
  const token = localStorage.getItem('token');
  const [contents, setContents] = useState(null);
  const [date, setDate] = useState(currDate);
  const [isLogin, setIsLogin] = useContext(LoginContext);

  const getPrevDate = date => {
    setDate(moment(date).subtract(1, 'days').format('YYYY-MM-DD'));
  };
  const getNextDate = date => {
    setDate(moment(date).subtract(-1, 'days').format('YYYY-MM-DD'));
  };
  const contentsApi = async () => {
    await axios
      .post(
        `${BASE_URL}/contents`,
        {
          date: date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(response => {
        setContents(response.data.contents);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {
    if (isLogin) {
      contentsApi();
    }
  }, [isLogin]);

  useEffect(() => {
    contentsApi();
  }, [date]);

  return (
    <Main>
      <Page style={{ left: '-60px' }}>
        <DayBefore onClick={() => getPrevDate(date)} />
      </Page>
      <Page style={{ right: '-60px' }}>
        <DayAfter onClick={() => getNextDate(date)} />
      </Page>
      <CurrentDate date={date} setDate={setDate} />
      <Details contents={contents} />
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
  position: relative;
`;

const Page = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 300px;
  opacity: 0.02;
  z-index: 10;
  :hover {
    opacity: 0.1;
    cursor: pointer;
  }
`;

const DayBefore = styled(NavigateBefore)`
  height: 200px;
  width: 200px;
`;
const DayAfter = styled(NavigateNext)`
  height: 200px;
  width: 200px;
`;
export default Schedule;
