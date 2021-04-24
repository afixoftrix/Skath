import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import moment from 'moment';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import StopWatch from "../Components/Tracks/StopWatch";
import WeatherTrack from "../Components/Tracks/Weather";
import LocationTrack from "../Components/Tracks/Location";
import StepsTrack from "../Components/Tracks/Steps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { addData, finishRecording, postToRecords } from "../redux/records";
import { FinishBtn } from "../Components/Buttons";
import { updateLocation } from "../redux/location";

const Page = styled.View`
  padding: 10px;
`;

const FinishBtnTxt = styled.Text`
  color: #fff;
  font-size: 24px;
  font-family: SourceSansPro_700Bold;
`;

/**
 * Tracker page displays all the selected trackers.
 *
 */
const Tracker = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const [coords, setCoords] = useState();
  const [locationName, setLocationName] = useState();
  const { interval, tracks } = useSelector((state) => state.trackOptions);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  let dataToAdd;
  
  const pushData = (state) => {
    console.log(state)
    dataToAdd = {
      location:
        tracks.indexOf("Location") !== -1 ? state.location.location : null,
      place: tracks.indexOf("Location") !== -1 ? state.location.place : null,
      temp:
        tracks.indexOf("Weather") !== -1
          ? state.weather.data.main.temp || ""
          : null,
      weather:
        tracks.indexOf("Weather") !== -1
          ? state.weather.data.weather[0].description || ""
          : null,
      steps: tracks.indexOf("Steps") !== -1 ? state.steps.steps : null,
      timeStamp: moment().format(),
    };
    dispatch(addData(dataToAdd));
  };
  
  useEffect(() => {
    /**
     * NOTE: There's probably a better way to implement these promises using async/await nomenclature.
     * I just dont remember how to use in this scenario at the time of coding this. So I'm using the old callback methods.
     */
    
    Permissions.askAsync(Permissions.LOCATION)
      .then(() => {
        Location.getCurrentPositionAsync({}).then((res) => {
          //Get current location --> longitude and latitude
          const coords = {
            lat: res.coords.latitude,
            long: res.coords.longitude,
          };
          setCoords(coords);
          Location.reverseGeocodeAsync({
            //Transform longitude and lattitude into human readable location
            longitude: coords.long,
            latitude: coords.lat,
          })
            .then((res) => {
              setLocationName({
                street: res[0].street,
                city: res[0].city,
                country: res[0].country,
              });
              updateLocation({ location: coords, place: locationName})
              setLoading(false);
            })
            .catch((err) => err);
        });
      })
      .catch((err) => {
        setErrorMsg(err);
      });

      const dataPushInt = setInterval(() => {
        console.log('data is being pushed');
        pushData(state);
      }, 5500);

      return () => {
        clearInterval(dataPushInt);
      }
  }, [state.weather.loading]);


  if (loading) {
    //while apis are loading show a loading UI
    return (
      <Page>
        <Text>Loading...</Text>
      </Page>
    );
  } else {
    //Note: no interval prop for setInterval in WeatherTrack because of API call being made there
    return (
      <Page>
        <StopWatch />
        {tracks.indexOf("Weather") !== -1 ? (
          <WeatherTrack location={coords} />
        ) : null}
        {tracks.indexOf("Location") !== -1 ? (
          <LocationTrack
            interval={interval}
            location={coords}
            place={locationName}
          />
        ) : null}
        {tracks.indexOf("Steps") !== -1 ? (
          <StepsTrack interval={interval} />
        ) : null}
        <FinishBtn
          onPress={() => {
            navigation.goBack();
            dispatch(
              finishRecording(moment().format("MMMM Do YYYY, h:mm:ss a"))
            );
            dispatch(postToRecords(state.records.sessionRecord.data))
            console.log(state.records.records);
          }}
        >
          <FinishBtnTxt> End Track </FinishBtnTxt>
        </FinishBtn>
      </Page>
    );
  }
};

export default Tracker;
