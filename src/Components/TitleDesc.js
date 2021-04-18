import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native';
import { useFonts, SourceSansPro_400Regular, SourceSansPro_700Bold } from "@expo-google-fonts/source-sans-pro";


// const Container = styled.View`
  
// `;

const Title = styled.Text`
  font-weight: 700;
  font-size: 24px;
`;
// const Desc = styled.View`

// `;

const TitleDesc = ({ title, desc, children }) => {
  return (
    <View>
      <Title style={{ fontFamily: "SourceSansPro_700Bold" }}>{title}</Title>
      <View>{children}</View>
    </View>
  );
}

export default TitleDesc