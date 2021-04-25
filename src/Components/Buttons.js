import React, { Component } from 'react'
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import styled from 'styled-components/native'

const BtnContainer = styled.TouchableOpacity`
  border: 2px solid #000;
  text-align: center;
  width: 100%;
  height: ${ props => props.ht ? props.ht : 'auto'};
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

const BaseBtnText = styled.Text`
  font-family: SourceSansPro_700Bold;
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
  padding: 20px;
  color: ${ props => props.disabled ? "#8f8f8f" : "#000" };
`;

export const FinishBtn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f55;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0;
`;


export const MainBtn = ({ btnTxt, bgImg, onPress }) => {
  return (
    <BtnContainer bg={bgImg} style={styles.container} onPress={onPress} ht="200px">
      <Image source={bgImg} style={styles.image} />
        <BtnTxt style={{ fontFamily: "SourceSansPro_700Bold", lineHeight: 36}}>
          {btnTxt}
        </BtnTxt>
    </BtnContainer>
  );
}

export const NavBtn = () => {
  return (
    <Button onPress={() => { console.log("btn has been pressed")}}>
      Press me
    </Button>
  )
}

export const BaseBtn = ({ name, onPress, disabled }) => {
  return (
    <BtnContainer disabled={disabled} onPress={onPress}>
      <BaseBtnText disabled={disabled}>{name}</BaseBtnText>
    </BtnContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 1, height: 1 },
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    width: 200,
    position: "absolute",
    right: 0,
  },
});

