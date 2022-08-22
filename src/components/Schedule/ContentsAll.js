import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TaskAlt } from '@styled-icons/material-rounded/TaskAlt';
import { TasksApp } from '@styled-icons/fluentui-system-regular/TasksApp';
import BASE_URL from '../../config';
import ContentElement from './ContentElement';
import { currDate } from '../../utils/updateCurr';
function ContentsAll(props) {
  const [contentText, setContent] = useState('');
  const [contents, setContents] = useState(null);
  const [date, setDate] = useState(currDate);
  //const token = localStorage.getItem('token');
  console.log('BASE_URL: ', `${BASE_URL}`);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYxMTM1NzYxLCJleHAiOjE2NjEyMjIxNjF9.st3DkmenXAE3rlJL78DdYZS7I1yl3-PtiCHG72t2-AI';
  const contentsApi = async () => {
    const response = await axios.post(
      `http://localhost:8000/contents`,
      {
        date: '2022-08-04',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setContents(response.data.contents);
  };

  useEffect(() => {
    contentsApi();
  }, []);
  const onContentHandler = e => {
    setContent(e.currentTarget.value);
  };
  return (
    <Wrapper>
      <Section>
        <ScheduleWrapper>
          {contents ? (
            contents?.map(content => (
              <ContentElement key={content.id} content={content} />
            ))
          ) : (
            <EmptyScheduleWrapper>empty</EmptyScheduleWrapper>
          )}
        </ScheduleWrapper>
      </Section>
    </Wrapper>
  );
}

export default ContentsAll;

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

const Input = styled.input`
  width: 94%;
  height: 35px;
  padding: 13px 12px;
  margin-left: 10px;
  margin-bottm: 12px;
  outline: none;
  border: transparent;
  border-radius: 15px;
  background-color: #f2f2f2;
  :focus {
  }
`;
const EmptyScheduleWrapper = styled.div``;
