import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import { Edit } from '@styled-icons/fa-regular/Edit';
import ContentsAll from './ContentsAll';
import { updateStatus } from '../../utils/updateCurr';
import BASE_URL from '../../config';

function Details() {
  const [modal, setModal] = useState(false);
  const [contents, setContents] = useState([]);

  const token = localStorage.getItem('token');

  const openModal = () => {
    setModal(true);
  };

  window.onload = setInterval(updateStatus, 1000);
  let scrollArea = document.getElementById('scroll');
  return (
    <Wrapper>
      <Section>
        <ScheduleWrapper id="scroll" className="scroll-area">
          <Header>
            <Status>
              <div id="curr" />
            </Status>
            <EditIcon onClick={openModal} />
          </Header>
          <Schedules>
            <ContentsAll />
          </Schedules>
        </ScheduleWrapper>
      </Section>
    </Wrapper>
  );
}

export default Details;

const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
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
  max-height: 430px;
  overflow-y: auto;
  overflow-x: hidden;
  /* Designing for scroll-bar */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  /* Handle */
  //::-webkit-scrollbar-thumb {
  //  background: black;
  //  border-radius: 5px;
  //}

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
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