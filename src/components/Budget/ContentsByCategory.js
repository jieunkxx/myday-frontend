import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import BASE_URL from '../../config';
import ContentItem from './ContentItem';

function WeeklyTime(props) {
  const { contents, color, isCategoryClicked } = props;
  return (
    <Wrapper>
      <Section>
        <TimeSetWrapper>
          <Header>Contents</Header>
          <ContentItemContainer>
            {contents && isCategoryClicked ? (
              contents.map(content => (
                <ContentItem key={content.id} content={content} color={color} />
              ))
            ) : (
              <></>
            )}
          </ContentItemContainer>
        </TimeSetWrapper>
      </Section>
    </Wrapper>
  );
}

export default WeeklyTime;

const Wrapper = styled.div`
  margin-top: 10px;
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

const ContentItemContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  min-height: 70px;
  align-items: center;
  background-color: white;
  border-radius: 11px;
  flex-wrap: wrap;
`;
