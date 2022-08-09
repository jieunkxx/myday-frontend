import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BASE_URL from '../../config';
import moment from 'moment';

function DailySchedule() {
  let today = new Date();
  let curr = moment().format('HH');
  setInterval(curr, 3.6e6);
  let currStatus;
  switch (curr) {
    case curr > 18:
      currStatus = 'EVENING';
      break;
    case curr > 12:
      currStatus = 'AFTERNOON';
      break;
    case curr > 6:
      currStatus = 'MORNING';
      break;
    case curr > 4:
      currStatus = 'EARLY BIRD';
      break;
    default:
      currStatus = 'NIGHT-OWL';
  }
  return (
    <Wrapper>
      <Section>
        <ScheduleWrapper>
          <Header>{currStatus}</Header>
        </ScheduleWrapper>
      </Section>
    </Wrapper>
  );
}

export default DailySchedule;

const Wrapper = styled.div`
  display: flex;
  border: 1px solid green;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
`;

const Section = styled.section`
  height: 100%;
  margin: auto auto;
  background-color: #f6efef;
  border: 1px solid red;
  min-width: 726px;
`;

const ScheduleWrapper = styled.section`
  width: 660px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid blue;
`;

const Header = styled.div`
  background-color: #f7b9b6;
`;
