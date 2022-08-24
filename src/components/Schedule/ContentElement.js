import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import { TaskAlt } from '@styled-icons/material-rounded/TaskAlt';
import { TasksApp } from '@styled-icons/fluentui-system-regular/TasksApp';
import BASE_URL from '../../config';

function ContentElement(props) {
  const token = localStorage.getItem('token');
  const { content } = props;
  const [contentText, setContent] = useState(content?.title || '');
  const getTime = time => {
    const res =
      time.split('T')[1].split(':')[0] + ':' + time.split('T')[1].split(':')[1];
    return res;
  };
  const startTime = getTime(content?.start_time) || moment().format('hh:mm');
  const endTime = getTime(content?.end_time) || '';

  const onContentHandler = e => {
    setContent(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Section>
        <ScheduleWrapper>
          <Hours>
            <span>
              {startTime}&nbsp;-&nbsp;{endTime}
            </span>
          </Hours>
          <Content>
            <ContentIcon
              style={{
                color: `${content.hex}`,
              }}
            />
            <Context>
              <Input
                type="content"
                value={contentText}
                onChange={onContentHandler}
              />
            </Context>
          </Content>
        </ScheduleWrapper>
      </Section>
    </Wrapper>
  );
}

export default ContentElement;

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
  font-weight: bold;
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
  padding: 20px;
  margin-left: 10px;
  outline: none;
  border: transparent;
  border-radius: 15px;
  background-color: #f2f2f2;
  font-size: 15px;
  font-weight: 500;
  :focus {
  }
`;
