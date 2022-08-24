import React, { useContext, useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import Color from './Color';
import BASE_URL from '../../config';
const colors = [
  { id: 1, color_name: 'gray', hex: '#7f7f7f' },
  { id: 2, color_name: 'blossom', hex: '#fdc9c5' },
  { id: 3, color_name: 'pistachio', hex: '#caeae5' },
  { id: 4, color_name: 'serene', hex: '#bdd5f7' },
  { id: 5, color_name: 'canary', hex: '#fde6b9' },
  { id: 6, color_name: 'latte', hex: '#d9cbc2' },
];
function EditCategory({
  openModal,
  setModal,
  titleText,
  setTitle,
  setIsUpdated,
  setTimeBudget,
  timeBudget,
  categorySelected,
  isCategoryClicked,
}) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [categoryColor, setCategoryColor] = useState('#d9cbc2');
  const addCategoryAPI = async () => {
    await axios
      .post(
        `${BASE_URL}/category`,
        {
          category_name: titleText,
          timelogs: timeBudget,
          color_hex: categoryColor,
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
  const updateCategoryAPI = async () => {
    const response = await axios.patch(
      `${BASE_URL}/category`,
      {
        id: categorySelected.id,
        category_name: titleText,
        timelogs: timeBudget,
        color_hex: categoryColor,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  const onTitleHandler = e => {
    setTitle(e.currentTarget.value);
  };
  const onBudgetHandler = e => {
    setTimeBudget(e.currentTarget.value);
  };
  const onSaveHandler = e => {
    if (isCategoryClicked) {
      updateCategoryAPI();
    } else {
      addCategoryAPI();
    }
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
          <Close
            onClick={() => {
              setModal(false);
            }}
          >
            <CloseIcon />
          </Close>
          <Section>
            <SocialLine />
            <Title>Category Name</Title>
          </Section>
          <EditContainer>
            <EditInput
              type="content"
              value={isCategoryClicked ? titleText : ''}
              onChange={onTitleHandler}
            />
          </EditContainer>
          <Section>
            <SocialLine />
            <Title>Colors</Title>
            <Selections>
              {colors.map(color => (
                <Color
                  key={color.id}
                  color={color}
                  setCategoryColor={setCategoryColor}
                  setModal={setModal}
                />
              ))}
            </Selections>
          </Section>
          <Section>
            <SocialLine />
            <Title>Time Budget</Title>
            <EditContainer>
              <EditInput
                type="content"
                value={isCategoryClicked ? timeBudget : ''}
                onChange={onBudgetHandler}
              />
            </EditContainer>
            <SocialLine />
          </Section>
          <CloseOpt>
            <Save
              onClick={() => {
                onSaveHandler();
              }}
            >
              {isCategoryClicked ? 'UPDATE' : 'ADD'}
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
  width: 360px;
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
  background-color: #f2f2f2;
  :focus {
  }
`;

const Section = styled.div`
  width: 100%;
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

const Title = styled.span`
  margin-bottom: 12px;
  padding: 0 8px;
  font-size: 14px;
  color: #abb0b5;
  z-index: 1;
  background-color: #fff;
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
  padding: 0 10px;
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
