import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Edit } from '@styled-icons/fa-regular/Edit';
import Content from './Content';
import { updateStatus } from '../../utils/updateCurr';

function DailySchedule() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  window.onload = setInterval(updateStatus, 1000);
  return (
    <Wrapper>
      <Section>
        <ScheduleWrapper>
          <Header>
            <Status>
              <div id="curr" />
            </Status>
            <EditIcon onClick={openModal} />
          </Header>
          <Schedules>
            <Content />
          </Schedules>
          <EmptyScheduleWrapper>empty</EmptyScheduleWrapper>
        </ScheduleWrapper>
      </Section>
    </Wrapper>
  );
}

export default DailySchedule;

const Wrapper = styled.div`
  width: 100%;
  display: flex;styled.input
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 8px;
  padding: 10px;
  background-color: white;
  border-radius: 11px;
  box-shadow: 2px 5px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ScheduleWrapper = styled.div`
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
`;

const Status = styled.h1`
  text-align: left;
  font-weight: 700;
  font-size: 40px;
  padding: 10px;
`;

const EditIcon = styled(Edit)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  color: #007aff;
  opacity: 0.6;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const Schedules = styled.div`
  width: 100%;
`;
const EmptyScheduleWrapper = styled.div``;
