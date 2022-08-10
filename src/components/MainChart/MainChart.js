import React, { useState } from 'react';
import styled from 'styled-components';
import { Rocket } from '@styled-icons/fluentui-system-regular/Rocket';
import { NavigateBefore, NavigateNext } from '@styled-icons/material';
import { updateDateTime } from '../../utils/updateCurr';
function MainChart() {
  const [currTime, setCurrTime] = useState();
  const [currDate, setCurrDate] = useState();
  window.onload = setInterval(updateDateTime, 1000);

  return (
    <Wrapper>
      <Section>
        <Header>
          <Time>
            <div id="time" />
          </Time>
          <Title>My Day</Title>
          <DateFormat>
            <div id="date" />
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
  width: 100%;
  display: flex;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px;
`;
const Time = styled.h3`
  padding-left: 10px;
  padding-bottom: 10px;
  div {
    text-align: left;
    font-weight: 700;
    font-size: 18px;
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
