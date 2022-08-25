import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import { TaskAlt } from '@styled-icons/material-rounded/TaskAlt';
import { TasksApp } from '@styled-icons/fluentui-system-regular/TasksApp';
import BASE_URL from '../../config';
function ContentItem(props) {
  const token = localStorage.getItem('token');
  const { content, color } = props;
  const [isClicked, setClicked] = useState(false);

  return (
    <Wrapper>
      <Section>
        <CategoryWrapper>
          <CategoryName
            style={{
              backgroundColor: `${color}`,
            }}
          >
            {content.content_title}
          </CategoryName>
        </CategoryWrapper>
      </Section>
    </Wrapper>
  );
}

export default ContentItem;

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 20%;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const CategoryWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const CategoryName = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 5px;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  font-size: 13px;
`;
