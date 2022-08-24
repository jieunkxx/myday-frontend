import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TaskAlt } from '@styled-icons/material-rounded/TaskAlt';
import { TasksApp } from '@styled-icons/fluentui-system-regular/TasksApp';
import BASE_URL from '../../config';
import ContentElement from './ContentElement';
import EmptySchedule from './EmptySchedule';
import { currDate } from '../../utils/updateCurr';
function ContentsHome(props) {
  const { contents } = props;
  const token = localStorage.getItem('token');

  return (
    <Wrapper>
      <Section>
        <ScheduleWrapper>
          {contents?.length > 0 ? (
            contents?.map(content => (
              <ContentElement key={content.id} content={content} />
            ))
          ) : (
            <EmptySchedule />
          )}
        </ScheduleWrapper>
      </Section>
    </Wrapper>
  );
}

export default ContentsHome;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const ScheduleWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Hours = styled.div`
  display: flex;
  justify-content: flex-start;
  span {
    padding: 0 40px;
    text-align: left;
    font-size: 12px;
    color: #007aff;
    font-weight: 500;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 3px 0;
`;

const ContentIcon = styled(TaskAlt)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  color: black;
`;

const Context = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
