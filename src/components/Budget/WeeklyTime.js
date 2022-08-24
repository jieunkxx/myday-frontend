import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import BASE_URL from '../../config';

function WeeklyTime(props) {
  const [modal, setModal] = useState(false);
  const [timeBudget, setTimeBudget] = useState('');
  const token = localStorage.getItem('token');
  const openModal = () => {
    setModal(true);
  };
  const onTimeBudgetHandler = e => {
    setTimeBudget(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Section>
        <TimeSetWrapper>
          <Header>Weekly Time Budget</Header>
          <TitleEditContainer>
            <TimeInput
              type="content"
              value={props.isCategoryClicked ? props.timeBudget : ''}
              onChange={onTimeBudgetHandler}
            />
            <EditIconContainer>hrs</EditIconContainer>
          </TitleEditContainer>
          <Remains>
            <span>Remainning:&nbsp;{}</span>
          </Remains>
        </TimeSetWrapper>
      </Section>
    </Wrapper>
  );
}

export default WeeklyTime;

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const TimeSetWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #007aff;
  font-weight: 700;
`;

const TitleEditContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const TimeInput = styled.input`
  width: 50%;
  height: 50px;
  padding: 13px 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  outline: none;
  border: transparent;
  border-radius: 15px;
  background-color: white;
  :focus {
  }
`;

const EditIconContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: lightgrey;
  color: white;
`;
const Remains = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  span {
    text-align: left;
    font-size: 12px;
    color: #007aff;
    font-weight: 500;
  }
`;
