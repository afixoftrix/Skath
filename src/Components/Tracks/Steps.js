import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { Pedometer } from "expo-sensors";

import { updateSteps } from "../../redux/steps";
import { collectSteps } from "../../redux/records";


const Container = styled.View`
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  background-color: #fff;
`;
const StepsTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
`;
const Steps = styled.Text`
  font-size: 24px;
`;

const StepsTrack = () => {
  const [stepCount, setStepCount] = useState();
  const dispatch = useDispatch();
  let _subscription;

  const _subscribe = () => {
    _subscription = Pedometer.watchStepCount(result => {
      setStepCount(result.steps);
      dispatch(updateSteps(result.steps));
      dispatch(collectSteps(result.steps));
  })}

  const _unsubscribe = () => {
    _subscription && _subscription.remove();
    _subscription = null;
  }

  useEffect(() => {
    _subscribe();
    return () => {
      //unsubscribe from pedometer
      _unsubscribe();
    }
  }, []);

  return (
    <Container>
      <StepsTitle>Steps Taken: </StepsTitle>
      <Steps>{stepCount}</Steps>
    </Container>
  );
};

export default StepsTrack;
