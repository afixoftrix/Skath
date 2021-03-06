import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import TitleDesc from '../Components/TitleDesc';
import { MainBtn } from '../Components/Buttons';

/**
 * Homepage 
 */
export const HomeContainer = styled.View`
  padding: 10px;
  background: #fff;
  height: 100%;
`;

const ButtonsContainer = styled.View`
  margin-top: 20px;
`

const startTrackingImg = require("../../assets/start-tracking-btn.png")
const diaryEntryImg = require("../../assets/diary-entry.png");

const Home = ({ navigation }) => {
  return (
    <HomeContainer>
      <TitleDesc title="Howdy Inquisitor,">
        <Text style={{ paddingRight: 40, fontSize: 16, lineHeight: 22 }}>
          To get started tracking yourself using your phone’s metrics, tap Start
          Tracking. To record something else, tap Diary Entry.
        </Text>
      </TitleDesc>
      <ButtonsContainer>
        <MainBtn
          bgImg={startTrackingImg}
          btnTxt="Start"
          btnTxtB="Tracking"
          onPress={() => {
            navigation.push("Set Tracker");
          }}
        />
        <MainBtn
          bgImg={diaryEntryImg}
          btnTxt="Data"
          btnTxtB="Entries"
          onPress={() => {
            navigation.push("Records");
          }}
        />
      </ButtonsContainer>
    </HomeContainer>
  );
}

export default Home;
