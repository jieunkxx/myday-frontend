import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import { TaskAlt } from '@styled-icons/material-rounded/TaskAlt';
import { TasksApp } from '@styled-icons/fluentui-system-regular/TasksApp';
import BASE_URL from '../../config';
function CategoryItem(props) {
  const token = localStorage.getItem('token');
  const { category } = props;
  const [isClicked, setClicked] = useState(false);
  const onClickHandler = () => {
    if (isClicked) {
      props.setIsCategoryClicked(false);
      props.setCategorySelected(null);
    } else {
      props.setIsCategoryClicked(true);
      props.setCategorySelected(category);
    }
    setClicked(!isClicked);
    props.setTitle(category.category_name);
    props.setTimeBudget(category.timelogs);
  };
  return (
    <Wrapper>
      <Section>
        <CategoryWrapper>
          <CategoryName
            style={{
              backgroundColor: `${category.hex}`,
            }}
            onClick={() => onClickHandler()}
          >
            {category.category_name}
          </CategoryName>
        </CategoryWrapper>
      </Section>
    </Wrapper>
  );
}

export default CategoryItem;

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 25%;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const CategoryWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const CategoryName = styled.div`
  width: 100%;
  height: 40px;
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

const ContentIcon = styled(TaskAlt)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  color: black;
`;

const Context = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Input = styled.input`
  width: 94%;
  height: 35px;
  padding: 13px 12px;
  margin-left: 10px;
  margin-bottom: 12px;
  outline: none;
  border: transparent;
  border-radius: 15px;
  background-color: #f2f2f2;
  :focus {
  }
`;
