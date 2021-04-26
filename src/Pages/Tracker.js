import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text } from "react-native";
import moment from 'moment';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import StopWatch from "../Components/Tracks/StopWatch";
import WeatherTrack from "../Components/Tracks/Weather";
import LocationTrack from "../Components/Tracks/Location";
import StepsTrack from "../Components/Tracks/Steps";
import { useDispatch, useSelector } from "react-redux";
import { transferDatum, collectLocation, collectPlace, collectTemp, finishRecording, postToRecords, collectWeather, incrementTick } from "../redux/records";
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
  
  const pushData = () => {
    dispatch(transferDatum());
    dispatch(incrementTick());
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
              updateLocation({ location: coords, place: locationName});
              dispatch(collectLocation(coords));
              dispatch(collectPlace(locationName));
              dispatch(collectTemp(state.weather.data.main.temp));
              dispatch(collectWeather(state.weather.data.weather[0].main));
              setLoading(false);
            })
            .catch(() =>{ 
              setLoading(false);
            });
        });
      })
      .catch((err) => {
        setErrorMsg(err);
      });

      const dataPushInt = setInterval(pushData, 5500);

      return () => {
        clearInterval(dataPushInt);
      }
  }, []);


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
          }}
        >
          <FinishBtnTxt> End Track </FinishBtnTxt>
        </FinishBtn>
      </Page>
    );
  }
};

export default Tracker;
