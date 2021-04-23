import React from 'react'
import styled from 'styled-components';
import { View, Text, Image, TouchableOpacity } from 'react-native'

const CardContainer = styled.TouchableOpacity`
  width: 50%;
  padding: 0 10px;
`;

const InnerCard = styled.View`
  border: 2px solid #000;
  text-align: center;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  overflow: hidden;
`;

const Indicator = styled.View`
  border: 2px solid #000;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  background: ${ props => props.selected ? "#3f3" : "#fff" };
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: "SourceSansPro_700Bold";
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Img = styled.Image`
  position: absolute;
  top: -20px;
`;

const TrackOptionCard = ({ title, img, onPress, isSelected }) => {
  return (
    <CardContainer onPress={onPress}>
      <InnerCard>
        <Indicator selected={isSelected} />
        <Img source={img} />
        <Title>{title}</Title>
      </InnerCard>
    </CardContainer>
  );
}



export default TrackOptionCard
