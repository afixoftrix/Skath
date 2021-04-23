import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native'
import { Stopwatch } from "react-native-stopwatch-timer";

//https://www.code-boost.com/video/how-to-build-a-react-stopwatch-timer/


const WatchContainer = styled.View`
  border: 2px solid #000;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
`;

const TitleText = styled.Text`
  width: 100%;
  text-align: center;
  font-family: "SourceSansPro_700Bold";
  font-size: 42px;
`;
const TimeContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const TimeText = styled.Text`
  font-size: 36px;
  width: 55px;
`;

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <WatchContainer>
      <TitleText>Time Elapsed</TitleText>
      <TimeContainer>
        <TimeText>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</TimeText>
        <TimeText>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</TimeText>
        <TimeText>{("0" + ((time / 10) % 100)).slice(-2)}</TimeText>
      </TimeContainer>
    </WatchContainer>
  );
}

export default StopWatch
