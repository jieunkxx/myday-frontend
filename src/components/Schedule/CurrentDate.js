import React, { useState } from 'react';
import styled from 'styled-components';
import { NavigateBefore, NavigateNext } from '@styled-icons/material';
import { updateDateTime } from '../../utils/updateCurr';
function CurrentDate() {
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
      </Section>
    </Wrapper>
  );
}

export default CurrentDate;

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
