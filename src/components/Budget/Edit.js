import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import { updateStatus } from '../../utils/updateCurr';
import BASE_URL from '../../config';
import Category from './Category';
import WeeklyTime from './WeeklyTime';
import ContentsByCategory from './ContentsByCategory';
function Edit() {
  const [modal, setModal] = useState(false);
  const [categories, setCategories] = useState(null);
  const [categorySelected, setCategorySelected] = useState(null);
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);
  const [isUpdated, setIsUpdated] = useState(true);
  const [timeBudget, setTimeBudget] = useState();
  const [contents, setContents] = useState(null);
  const token = localStorage.getItem('token');
  const categoryApi = async () => {
    await axios
      .get(`${BASE_URL}/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {});
  };
  const contentsByCategoryAPI = async () => {
    await axios
      .get(`${BASE_URL}/contents/byCategoryId/${categorySelected.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setContents(response.data?.contents[0]?.content);
      })
      .catch(error => {});
  };
  useEffect(() => {
    if (isUpdated) {
      categoryApi();
    }
    setIsUpdated(false);
  }, [isUpdated]);

  useEffect(() => {
    if (isCategoryClicked) contentsByCategoryAPI();
  }, [categorySelected]);
  const openModal = () => {
    setModal(true);
  };
  window.onload = setInterval(updateStatus, 1000);
  return (
    <Wrapper>
      <Section>
        <ScrollArea>
          <Category
            categories={categories}
            setCategories={setCategories}
            setCategorySelected={setCategorySelected}
            categorySelected={categorySelected}
            setIsUpdated={setIsUpdated}
            setTimeBudget={setTimeBudget}
            timeBudget={timeBudget}
            isCategoryClicked={isCategoryClicked}
            setIsCategoryClicked={setIsCategoryClicked}
          />
          <WeeklyTime
            timeBudget={timeBudget}
            isCategoryClicked={isCategoryClicked}
          />
          <ContentsByCategory
            isCategoryClicked={isCategoryClicked}
            contents={contents}
            color={categorySelected?.hex}
          />
        </ScrollArea>
      </Section>
    </Wrapper>
  );
}

export default Edit;

const Wrapper = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 8px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 11px;
`;

const ScrollArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  /* Designing for scroll-bar */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  /* Handle */
  //::-webkit-scrollbar-thumb {
  //  background: black;
  //  border-radius: 5px;
  //}

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
