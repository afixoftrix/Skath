import React, { Component } from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import TitleDesc from '../Components/TitleDesc';
import { MainBtn } from '../Components/Buttons';

const HomeContainer = styled.View`
  padding: 10px;
`;

const ButtonsContainer = styled.View`
  margin-top: 20px;
`

// const startTrackingImg = require("../../assets/start-tracking-btn.png");
// const diaryEntryImg = require("../../assets/diary-entry.png");
const startTrackingImg = require("../../assets/start-tracking-btn.png")
const diaryEntryImg = require("../../assets/diary-entry.png");

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <TitleDesc title="Howdy Inquisitor,">
          <Text>
            To get started tracking yourself using your phone’s metrics, tap
            Start Tracking. To record something else, tap Diary Entry.
          </Text>
        </TitleDesc>
        <ButtonsContainer>
          <MainBtn
            bgImg={startTrackingImg}
            btnTxt="Start tracking"
          />
          <MainBtn
            bgImg={diaryEntryImg}
            btnTxt="Diary Entry"
          />
        </ButtonsContainer>
      </HomeContainer>
    );
  }
}
