import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { View, Text, SafeAreaView } from "react-native";
import TitleDesc from "../Components/TitleDesc";
import TrackOptionCard from "../Components/TrackOptionCard";
import { BaseBtn } from "../Components/Buttons";
import { addOption, removeOption } from "../redux/trackOptions";

const trackers = [
  {
    title: "Weather",
    img: require("../../assets/weather-tracking.png"),
  },
  {
    title: "Steps",
    img: require("../../assets/steps-tracking.png"),
  },
  {
    title: "Location",
    img: require("../../assets/location-tracking.png"),
  },
];

const Page = styled.View`
  height: 100%;
  background: #fff;
`;

const TitleContainer = styled.View`
  padding: 10px;
`;

const TrackOptionsContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TrackBtnContainer = styled.View`
  padding: 10px;
  width: 100%;
`;

const PreTracker = ({ navigation }) => {
  const state = useSelector((state) => state.trackOptions);
  const dispatch = useDispatch();
  // const [validOptions, setValidOptions] = useState(false)

  // useEffect(() => {
  //   if (state.tra)
  // }, [state.trackOptions.tracks])

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Page>
        <TitleContainer>
          <TitleDesc title="Tracking">
            <Text>
              To start tracking select metrics from the list that you would like
              to track realtime.
            </Text>
          </TitleDesc>
        </TitleContainer>
        <TrackOptionsContainer>
          {trackers.map(({ title, img }, i) => {
            const isSelected = state.tracks.indexOf(title) !== -1;
            return (
              <TrackOptionCard
                onPress={() => {
                  !isSelected
                    ? dispatch(addOption(title))
                    : dispatch(removeOption(title));
                }}
                isSelected={isSelected}
                title={title}
                img={img}
                key={i}
              />
            );
          })}
        </TrackOptionsContainer>
        <TrackBtnContainer>
          <BaseBtn
            ht="64px"
            name="Start Tracking"
            onPress={() => {
              navigation.push("Tracker");
            }}
            disabled={state.tracks.length === 0}//if no tracks are selected let the button be disabled
          />
        </TrackBtnContainer>
      </Page>
    </SafeAreaView>
  );
};

export default PreTracker;
