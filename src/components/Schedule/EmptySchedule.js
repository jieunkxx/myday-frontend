import React, { useContext, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import { TaskAlt } from '@styled-icons/material-rounded/TaskAlt';

function EmptySchedule(props) {
  const token = localStorage.getItem('token');
  const [contentText, setContent] = useState('');

  const onContentHandler = e => {
    setContent(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <Section>
        <ScheduleWrapper>
          <Hours>
            <span>add new content</span>
          </Hours>
          <Content>
            <ContentIcon />
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

export default EmptySchedule;

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
  margin-bottom: 12px;
  outline: none;
  border: transparent;
  border-radius: 15px;
  background-color: #f2f2f2;
  :focus {
  }
`;
