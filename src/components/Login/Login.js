import React, { useContext, useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import KakaoLogin from './KakaoLogin';

function Login({ openModal, setModal }) {
  const navigate = useNavigate();

  return (
    <>
      <Overlay
        onClick={() => {
          setModal(false);
        }}
      />
      <ModalWrapper>
        <ModalBox>
          <Close
            onClick={() => {
              setModal(false);
            }}
          >
            <CloseIcon />
          </Close>
          <SignUpSocial>
            <SocialLine />
            <SocialTitle>Social Login</SocialTitle>
            <KakaoLogin />
          </SignUpSocial>
        </ModalBox>
      </ModalWrapper>
    </>
  );
}
export default Login;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalWrapper = styled.div`
  width: 360px;
  height: 500px;
  border-radius: 10px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalBox = styled.div``;
const Close = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CloseIcon = styled(CloseOutline)`
  margin-left: auto;
  width: 16px;
`;

const SignUpSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLine = styled.hr`
  position: relative;
  top: 7.5px;
  margin: 0;
  width: 100%;
  height: 1px;
  background-color: #f1f3f5;
  border: none;
  display: block;
`;

const SocialTitle = styled.span`
  margin-bottom: 12px;
  padding: 0 8px;
  font-size: 11px;
  color: #abb0b5;
  z-index: 1;
  background-color: #fff;
`;
