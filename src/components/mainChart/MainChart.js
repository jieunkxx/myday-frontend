import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { Rocket } from '@styled-icons/fluentui-system-regular/Rocket';
import { NavigateBefore, NavigateNext } from '@styled-icons/material';

function MainChart() {
  let update = function () {
    document.getElementById('date').innerHTML = moment().format('MMM DD');
    document.getElementById('time').innerHTML = moment().format('HH:mm A');
  };
  setInterval(update, 10000);
  return (
    <Wrapper>
      <Section>
        <Header>
          <Time>
            <div id="time"></div>
          </Time>
          <Title>My Day</Title>
          <DateFormat>
            <div id="date"></div>
          </DateFormat>
        </Header>
        <ChartWrapper>
          <Page>
            <NavigateBefore />
          </Page>
          <Chart>
            <RocketIcon />
          </Chart>
          <Page>
            <NavigateNext />
          </Page>
        </ChartWrapper>
      </Section>
    </Wrapper>
  );
}

export default MainChart;

const Wrapper = styled.div`
  display: flex;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 726px;
  margin: 40px auto auto;
  background-color: #f6efef;
`;

const Header = styled.div`
  max-width: 726px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Time = styled.h3`
  div {
    text-align: left;
    font-weight: 700;
    font-size: 20px;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-weight: 700;
  font-size: 40px;
`;

const DateFormat = styled.h2`
  text-align: left;
  font-weight: 700;
  font-size: 30px;
`;
const ChartWrapper = styled.div`
  max-width: 726px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 35px;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 350px;
`;

const RocketIcon = styled(Rocket)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  color: black;
`;
