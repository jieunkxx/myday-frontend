import React, { useState } from 'react';
import styled from 'styled-components';

function BudgetHeader() {
  return (
    <Wrapper>
      <Section>
        <Header>
          <Time>
            <div id="time" />
          </Time>
          <Title>Budget</Title>
        </Header>
      </Section>
    </Wrapper>
  );
}

export default BudgetHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px;
`;
const Time = styled.h3`
  padding-left: 10px;
  padding-bottom: 10px;
  div {
    text-align: left;
    font-weight: 700;
    font-size: 18px;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-weight: 700;
  font-size: 40px;
`;
