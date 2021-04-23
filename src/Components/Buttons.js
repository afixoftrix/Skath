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

export const MainBtn = ({ btnTxt, bgImg, onPress }) => {
  return (
    <BtnContainer bg={bgImg} style={styles.container} onPress={onPress} ht="200px">
      <Image source={bgImg} style={styles.image} />
        <BtnTxt style={{ fontFamily: "SourceSansPro_700Bold"}}>
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

export const BaseBtn = ({ name, onPress }) => {
  return (
    <BtnContainer onPress={onPress}>
      <Text style={styles.baseBtnTxt}>{name}</Text>
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
  baseBtnTxt: {
    fontFamily: "SourceSansPro_700Bold",
    textTransform: "uppercase",
    fontSize: 24,
    textAlign: 'center',
    padding: 20
  },
});

