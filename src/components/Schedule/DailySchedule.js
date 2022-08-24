import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { Edit } from '@styled-icons/fa-regular/Edit';
import ContentsHome from './ContentsHome';
import EmptySchedule from './EmptySchedule';
import EditContents from './EditContents';
import { updateStatus } from '../../utils/updateCurr';
import BASE_URL from '../../config';
import { currDate } from '../../utils/updateCurr';
function DailySchedule(props) {
  const token = localStorage.getItem('token');
  const [contents, setContents] = useState(null);
  const [isUpdated, setIsUpdated] = useState(true);
  const [modal, setModal] = useState(false);
  const { date } = props;
  const openModal = () => {
    setModal(true);
  };
  window.onload = setInterval(updateStatus, 1000);

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
        console.log(error);
      });
  };
  useEffect(() => {
    contentsApi();
  }, [date, isUpdated]);
  return (
    <Wrapper>
      {modal && (
        <EditContents
          openModel={openModal}
          setModal={setModal}
          setContents={setContents}
          setIsUpdated={setIsUpdated}
        />
      )}
      <Section>
        <ScheduleWrapper>
          <Header>
            <Status>
              <div id="curr" />
            </Status>
            <EditIcon onClick={openModal} />
          </Header>
          {contents?.length > 0 ? (
            <Schedules>
              <ContentsHome contents={contents} />
            </Schedules>
          ) : (
            <EmptySchedule />
          )}
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
