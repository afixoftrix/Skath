import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { Pedometer } from "expo-sensors";

import { updateSteps } from "../../redux/steps";


const Container = styled.View`
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px;
`;

const StepsTrack = () => {
  const [stepCount, setStepCount] = useState();
  const dispatch = useDispatch();
  let _subscription;

  const _subscribe = () => {
    _subscription = Pedometer.watchStepCount(result => {
      setStepCount(result.steps);
      dispatch(updateSteps(result.steps));
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
      <Text>STEPS</Text>
      <Text>{stepCount}</Text>
    </Container>
  );
};

export default StepsTrack;
