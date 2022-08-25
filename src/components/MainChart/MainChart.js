import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Rocket } from '@styled-icons/fluentui-system-regular/Rocket';
import { NavigateBefore, NavigateNext } from '@styled-icons/material';
import { currDate, updateDateTime } from '../../utils/updateCurr';
function MainChart(props) {
  const { date } = props;
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getSeconds() !== time.getSeconds()) {
        setTime(now);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [time]);
  window.onload = setInterval(updateDateTime, 1000);

  const getPrevDate = date => {
    props.setDate(moment(date).subtract(1, 'days').format('YYYY-MM-DD'));
  };
  const getNextDate = date => {
    props.setDate(moment(date).subtract(-1, 'days').format('YYYY-MM-DD'));
  };

  return (
    <Wrapper>
      <Section>
        <Header>
          <Time>
            <div id="time" />
          </Time>
          <Title>My Day</Title>
          <DateFormat>{moment(date).format('MMM DD')}</DateFormat>
        </Header>
        <ChartWrapper>
          <Page>
            <DayBefore onClick={() => getPrevDate(date)} />
          </Page>
          <Chart>
            <Numbers>
              <div>
                <p>00</p>
              </div>
              <div>
                <p>18</p>
                <p>06</p>
              </div>
              <div>
                <p>12</p>
              </div>
            </Numbers>
            <Sectors className="sectors" time={time} />
            <Outer time={time}>
              <Current time={time} />
            </Outer>
            <Inner />
            <RocketIcon time={time} />
          </Chart>
          <Page>
            <DayAfter onClick={() => getNextDate(date)} />
          </Page>
        </ChartWrapper>
      </Section>
    </Wrapper>
  );
}

export default MainChart;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
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

const DateFormat = styled.h2`
  text-align: left;
  font-weight: 700;
  font-size: 30px;
`;
const ChartWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 35px;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  position: relative;
`;

const Numbers = styled.div`
width: 350px;
height: 350px;
position: absolute;  
display: flex;
flex-direction: column;
justify-content: space-between;
z-index:1;
div{
  display: flex;
  justify-content: center;
}
div:nth-child(2){
  display: flex;
  justify-content: space-between;
}
}`;

const Sectors = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;

  line {
    position: absolute;
    width: 598px;
    background-color: black;
    thick {
      top: calc(50% - 2px);
      height: 4px;
      z-index: 1;
    }

    thin {
      top: calc(50% - 0.5px);
      height: 1px;
    }
  }
`;
const Outer = styled.div.attrs(({ time }) => ({
  style: {
    transform: `rotateZ(${
      ((time.getHours() % 12) * 60 + time.getMinutes()) * 0.5
    }deg)`,
  },
}))`
  border: 2.5vw solid white;
  border-radius: 50%;
  height: 280px;
  width: 280px;
  position: absolute;
  box-shadow: 2px 5px 14px 0 rgba(0, 0, 0, 0.2),
    9px 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 6;
`;
const Inner = styled.div`
  border-radius: 50%;
  height: 240px;
  width: 240px;
  position: absolute;
  background-color: #fdeceb;
  box-shadow: 2px 5px 14px 0 rgba(0, 0, 0, 0.2),
    9px 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 3;
`;

const RocketIcon = styled(Rocket)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  color: black;
  z-index: 4;
`;

const Current = styled.div.attrs(({ time }) => ({
  style: {
    //    transform: `rotateZ(${
    //      ((time.getHours() % 12) * 60 + time.getMinutes()) * 0.5
    //    }deg)`,
  },
}))`
  border-radius: 2.5px;
  height: 0;
  width: 15px;
  z-index: 7;
  border-style: solid;
  border-width: 0 10px 15px 10px;
  border-color: transparent transparent #007aff transparent;
`;

const DayBefore = styled(NavigateBefore)`
  :hover {
    cursor: pointer;
  }
`;
const DayAfter = styled(NavigateNext)`
  :hover {
    cursor: pointer;
  }
`;
