import React, { Component } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'

const BtnContainer = styled.View`
  border: 2px solid #000;
  text-align: center;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding-left: 20px;
  /* filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.15));  things like these have separate rules in ios and android*/
`;
const BtnTxt = styled.Text`
  font-size: 36px;
  width: 150px;
  margin: auto 0;
`;

export const MainBtn = ({ btnTxt, bgImg }) => {
  return (
    <BtnContainer bg={bgImg} style={styles.container}>
      <Image source={bgImg} style={styles.image} />
        <BtnTxt style={{ fontFamily: "SourceSansPro_700Bold"}}>
          {btnTxt}
        </BtnTxt>
    </BtnContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.65)",
    shadowOffset: {width: 4, height: 6 },
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    width: 200,
    position: 'absolute',
    right: 0,
  },
});

