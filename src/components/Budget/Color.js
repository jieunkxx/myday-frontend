import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import { TaskAlt } from '@styled-icons/material-rounded/TaskAlt';
import { TasksApp } from '@styled-icons/fluentui-system-regular/TasksApp';
import BASE_URL from '../../config';
function Color(props) {
  const token = localStorage.getItem('token');
  const { color } = props;
  const clickHandler = () => {
    props.setCategoryColor(color.hex);
  };
  return (
    <Wrapper>
      <Section>
        <ColorWrapper>
          <ColorName
            style={{
              backgroundColor: `${color.hex}`,
            }}
            onClick={() => clickHandler()}
          >
            {color.color_name}
          </ColorName>
        </ColorWrapper>
      </Section>
    </Wrapper>
  );
}

export default Color;

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 50px;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const ColorWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorName = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 15px;
  color: white;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;
