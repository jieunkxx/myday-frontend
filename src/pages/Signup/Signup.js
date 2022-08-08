import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BASE_URL from '../../config';
import KakaoLogin from '../../components/Login/KakaoLogin';

function SignUp() {
  const [email, setEmail] = useState('');

  return (
    <Main>
      <Section>
        <MainIMG>
          <Title>My day</Title>
        </MainIMG>
        <SignupSocial>
          <SocialLine>
            <KakaoLogin></KakaoLogin>
          </SocialLine>
        </SignupSocial>
      </Section>
    </Main>
  
  );
}

export default SignUp;

const Main = styled.main`
  min-height: 900px;
  line-height: 1.5;
`;
const Section = styled.section`
  width: 320px;
  margin: 64px auto auto;
`;
const Title = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 26px;
`;