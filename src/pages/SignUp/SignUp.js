import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const mainImg = './icons/alarm-clock.png';
function SignUp() {
  return (
    <Wrapper>
      <Section>
        <Background>
          <LeftIMG />
          <RightIMG />
          <MainTitle>
            <MainImg>
              <img id="main-img" alt="img" src={mainImg} />
            </MainImg>
            <Title>
              <span>My day</span>
            </Title>
          </MainTitle>
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
  width: 726px;
  height: 700px;
  margin: auto auto;
`;

const Background = styled.section`
  position: absolute;
  width: 100%;
`;

const LeftIMG = styled.div`
  position: relative;
  width: 363px;
  height: 700px;
  background-color: #f7b9b6;
  z-index: 1;
`;

const RightIMG = styled.div`
  position: relative;
  bottom: 700px;
  left: 363px;
  width: 363px;
  height: 700px;
  background-color: #caeae5;
  z-index: 1;
`;

const MainTitle = styled.section`
  position: relative;
  bottom: 1200px;
  left: 264px;
  z-index: 2;
`;

const Title = styled.h1`
  margin: 90px 20px;
  padding-left: 10px;
  font-weight: 700;
  font-size: 40px;
  z-index: 3;
`;

const MainImg = styled.div`
  z-index: 3;
  img {
    height: 200px;
  }
`;
