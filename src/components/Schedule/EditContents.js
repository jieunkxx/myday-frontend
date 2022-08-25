import React, { useContext, useState, useEffect, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';
import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import BASE_URL from '../../config';
import { currDate } from '../../utils/updateCurr';

function EditCategory({ openModal, setModal, setContents, setIsUpdated }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  let contentObj = {
    title: '',
    memo: '',
    start_time: '',
    end_time: '',
    color_hex: '#d9cbc2',
    category_name: '',
  };
  const currMin = Number(moment().format('mm')) < 30 ? '00' : '30';
  const currTime = moment().format('hh:') + currMin;
  const [date, setDate] = useState(currDate);
  const [startDate, setStartDate] = useState(currDate);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [contentTitle, setContentTitle] = useState();
  const [category, setCategory] = useState();
  const [memo, setMemo] = useState('');
  const [content, setContent] = useState(contentObj);

  const addContentAPI = async () => {
    await axios
      .post(
        `${BASE_URL}/contents/create`,
        {
          title: contentTitle,
          memo: memo,
          start_time: startTime,
          end_time: endTime,
          color_hex: '#d9cbc2',
          category_name: category,
          createCategory: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(response => {})
      .catch(error => {
        console.log(error.response.data);
      });
  };
  const updateContentAPI = async () => {
    const response = await axios.patch(
      `${BASE_URL}/category/`,
      {
        title: contentTitle,
        memo: memo,
        start_time: startTime,
        end_time: endTime,
        color_hex: '#d9cbc2',
        category_name: category,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  const onStartTimeHandler = ([date]) => {
    setStartTime(date);
  };
  const onEndTimeHandler = ([date]) => {
    setEndTime(date);
  };
  const onContentTitleHandler = e => {
    setContentTitle(e.currentTarget.value);
  };
  const onCategoryHandler = e => {
    setCategory(e.currentTarget.value);
  };
  const onMemoHandler = e => {
    setMemo(e.currentTarget.value);
  };
  const onSaveHandler = e => {
    addContentAPI();
    setIsUpdated(true);
    setModal(false);
  };
  return (
    <>
      <Overlay
        onClick={() => {
          setModal(false);
        }}
      />
      <ModalWrapper>
        <ModalBox>
          <SectionRow>
            <Header>Content</Header>
            <Close
              onClick={() => {
                setModal(false);
              }}
            >
              <CloseIcon />
            </Close>
          </SectionRow>
          <InnerBox>
            <Section>{date}</Section>
            <SectionRow>
              <Section>
                <SocialLine />
                <Title>Start time</Title>
                <EditContainer>
                  <TimePickerEditInput
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H:i',
                      time_24hr: true,
                      minuteIncrement: 30,
                      defaultHour: moment().add(1, 'hours').format('HH:00'),
                      defaultMinute: 0,
                    }}
                    value={startTime}
                    onChange={([date]) => {
                      setStartTime(date);
                    }}
                  />
                </EditContainer>
              </Section>
              <Section>
                <SocialLine />
                <Title>End time</Title>
                <EditContainer>
                  <TimePickerEditInput
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: 'H:i',
                      time_24hr: true,
                      minuteIncrement: 30,
                      defaultHour: moment().add(1, 'hours').format('HH'),
                      defaultMinute: 0,
                    }}
                    value={endTime}
                    onChange={([time]) => {
                      setEndTime(time);
                    }}
                  />
                </EditContainer>
              </Section>
            </SectionRow>
            <Section>
              <SocialLine />
              <Title>Content</Title>
              <EditContainer>
                <EditInput
                  type="content"
                  value={contentTitle}
                  onChange={onContentTitleHandler}
                />
              </EditContainer>
            </Section>
            <Section>
              <SocialLine />
              <Title>Category</Title>
              <EditContainer>
                <EditInput
                  type="content"
                  value={category}
                  onChange={onCategoryHandler}
                />
              </EditContainer>
            </Section>
            <Section>
              <SocialLine />
              <Title>Memo</Title>
              <EditContainer>
                <EditInput
                  type="content"
                  value={memo}
                  onChange={onMemoHandler}
                />
              </EditContainer>
              <SocialLine />
            </Section>
          </InnerBox>
          <CloseOpt>
            <Save
              onClick={() => {
                onSaveHandler();
              }}
            >
              {true ? 'CREATE' : 'ADD'}
            </Save>
          </CloseOpt>
        </ModalBox>
      </ModalWrapper>
    </>
  );
}
export default EditCategory;
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
  width: 460px;
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
  box-shadow: 2px 5px 14px 0 rgba(0, 0, 0, 0.2),
    9px 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ModalBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InnerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  outline: none;
  border: transparent;
  border-radius: 15px;
  padding: 20px 10px;
  margin-top: 15px;
`;
const EditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0 10px;
`;

const EditInput = styled.input`
  flex: 1;
  width: 50%;
  height: 50px;
  padding: 13px 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  outline: none;
  border: transparent;
  border-radius: 15px;
  background-color: white;
  :focus {
  }
`;

const TimePickerEditInput = styled(Flatpickr)`
  flex: 1;
  width: 50%;
  height: 50px;
  padding: 13px 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  outline: none;
  border: transparent;
  border-radius: 15px;
  background-color: white;
  :focus {
  }
`;

const Section = styled.div`
  width: 100%;
`;

const SocialLine = styled.hr`
  position: relative;
  top: 7.5px;
  margin: 0;
  width: 90%;
  height: 1px;
  background-color: #f1f3f5;
  border: none;
  display: block;
  z-index: -1;
`;
const SectionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
const Header = styled.span`
  display: flex;
  align-item: center;
  padding: 0 8px;
  font-size: 30px;
  font-weight: bold;
  color: #6a6969;
  z-index: 1;
  background-color: #fff;
`;
const Title = styled.span`
  margin-bottom: 12px;
  padding: 0 13px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.6;
  color: #007aff;
  z-index: 1;
`;

const Selections = styled.div`
  display: flex;
  align-items: center;
  min-height: 150px;
  background-color: white;
  flex-wrap: wrap;
`;

const CloseOpt = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  padding-top: 20px;
`;

const Close = styled.span`
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px;
  cursor: pointer;
`;

const Save = styled.span`
  background-color: #007aff;
  color: white;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
`;
const CloseIcon = styled(CloseOutline)`
  margin-left: auto;
  width: 20px;
`;
const SaveIcon = styled(CloseOutline)`
  margin-left: auto;
  width: 20px;
`;
