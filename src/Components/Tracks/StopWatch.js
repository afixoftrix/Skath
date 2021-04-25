import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { collectWeather } from '../../redux/records';

//Used the link below for help with creating the timer.
//https://www.code-boost.com/video/how-to-build-a-react-stopwatch-timer/


const WatchContainer = styled.View`
  border: 2px solid #000;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const TitleText = styled.Text`
  width: 100%;
  text-align: center;
  font-family: "SourceSansPro_700Bold";
  font-size: 36px;
`;
const TimeContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const TimeText = styled.Text`
  font-size: 28px;
  width: auto;
`;

const TickCount = styled.View`
  display: flex;
  flex-direction: row;
`;

const TickCountContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TickTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
`;

const Count = styled.Text`
  font-size: 18px;
  line-height:34px;
`;


const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const { ticks } = useSelector(state => state.records)

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <WatchContainer>
      <TickCountContainer>
        <TickCount>
          <TickTitle>Data Points: </TickTitle>
          <Count>{ticks}</Count>
        </TickCount>
      </TickCountContainer>
      <TitleText>Time Elapsed</TitleText>
      <TimeContainer>
        <TimeText>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </TimeText>
        <TimeText>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</TimeText>
        <TimeText>{("0" + ((time / 10) % 100)).slice(-2)}</TimeText>
      </TimeContainer>
    </WatchContainer>
  );
}

export default StopWatch
