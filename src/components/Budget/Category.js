import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import BASE_URL from '../../config';
import { FolderAdd } from '@styled-icons/heroicons-outline/FolderAdd';
import { Edit } from '@styled-icons/fa-regular/Edit';
import CategoryItem from './CategoryItem';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import { updateCategorySelect } from '../../utils/updateCurr';

function Category(props) {
  const [modal, setModal] = useState(false);
  const [titleText, setTitle] = useState('');
  const [contents, setContents] = useState(null);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const { categories } = props;
  const token = localStorage.getItem('token');
  const openModal = () => {
    setModal(true);
  };
  const onTitleHandler = e => {
    setTitle(e.currentTarget.value);
  };

  return (
    <Wrapper>
      {modal && edit && (
        <EditCategory
          openModel={openModal}
          setModal={setModal}
          titleText={titleText}
          setTitle={setTitle}
          setIsUpdated={props.setIsUpdated}
          setTimeBudget={props.setTimeBudget}
          timeBudget={props.timeBudget}
          categorySelected={props.categorySelected}
          isCategoryClicked={props.isCategoryClicked}
        />
      )}
      <Section>
        <CategoryWrapper>
          <Header>Category</Header>
          <TitleEditContainer>
            <TitleInput
              type="content"
              value={props.isCategoryClicked ? titleText : ''}
              onChange={onTitleHandler}
            />
            <IconContainer>
              <EditIcon
                onClick={() => {
                  openModal();
                  setEdit(!edit);
                }}
                active={true}
              />
            </IconContainer>
          </TitleEditContainer>
          <CategoryItemsContainer id="categories">
            {categories
              ? categories.map(category => (
                  <CategoryItem
                    className="categoryBtn"
                    key={category.id}
                    category={category}
                    setCategorySelected={props.setCategorySelected}
                    setTitle={setTitle}
                    setTimeBudget={props.setTimeBudget}
                    setIsCategoryClicked={props.setIsCategoryClicked}
                  />
                ))
              : ''}
          </CategoryItemsContainer>
        </CategoryWrapper>
      </Section>
    </Wrapper>
  );
}

export default Category;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const CategoryWrapper = styled.div`
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

const TitleEditContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const TitleInput = styled.input`
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

const IconContainer = styled.button`
  width: 40px;
  height: 40px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: lightgrey;
  border: none;
`;
const EditIcon = styled(Edit)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  color: ${props => (props.active ? '#007aff' : 'white')};
  opacity: 0.6;
  :hover {
    color: #007aff;
    cursor: pointer;
    opacity: 1;
  }
`;

const AddIcon = styled(FolderAdd)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  color: ${props => (props.active ? '#007aff' : 'white')};
  opacity: 0.6;
  :hover {
    color: #007aff;
    cursor: pointer;
    opacity: 1;
  }
`;

const CategoryItemsContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  min-height: 150px;
  background-color: white;
  border-radius: 11px;
  flex-wrap: wrap;
`;
