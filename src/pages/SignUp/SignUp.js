import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SignUp() {
  return (
    <Wrapper>
      <Section>
        <Background>
          <LeftIMG>
            <TitleLeft>My</TitleLeft>
          </LeftIMG>
          <RightIMG>
            <TitleRight>Day</TitleRight>
          </RightIMG>
        </Background>
      </Section>
    </Wrapper>
  );
}

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  font-family: 'AirbnbCereal_W_Bk', 'Montserrat', sans-serif, Courier, monospace;
`;

const Section = styled.section`
  width: 660;
  height: 100%;
  margin: auto auto;
`;

const Background = styled.section`
  display: flex;
  align-items: center;
  min-width: 726px;
  width: 100%;
  height: 100%;
`;

const LeftIMG = styled.div`
  width: 50%;
  background-color: #f7b9b6;
`;

const RightIMG = styled.div`
  width: 50%;
  background-color: #caeae5;
`;

const TitleLeft = styled.h1`
  text-align: right;
  font-weight: 700;
  font-size: 40px;
  padding: 450px 20px 150px 70px;
`;

const TitleRight = styled.h1`
  text-align: left;
  font-weight: 700;
  font-size: 40px;
  padding: 450px 70px 150px 20px;
`;
