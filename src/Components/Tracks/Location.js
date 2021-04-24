import React, { useEffect } from "react";
import styled from 'styled-components';
import { Platform, Text, View, StyleSheet } from "react-native";
import { updateLocation } from "../../redux/location";
import { useDispatch } from "react-redux";


const Container = styled.View`
  border: 2px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 5px;
  padding: 10px;
  overflow: hidden;
`;
const Title = styled.Text`
  font-size: 16px;
  font-family: SourceSansPro_700Bold;
  margin-bottom: 10px;
`;
const Place = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
const PlaceText = styled.Text`
  font-size: 24px;
  font-family: SourceSansPro_700Bold;
`;
const CountryText = styled.Text`
  font-family: SourceSansPro_400Regular;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;
const GeocodeText = styled.Text`
  font-style: italic;
  font-weight: 200;
`;


const LocationTrack = ({ location, place, interval }) => {
  const dispatch = useDispatch();
  const updater = () => {
    dispatch(updateLocation({ location, place }));
  }

  useEffect(() => {
    const updaterInterval = setInterval(updater, interval);

    return () => { 
      console.log("location updater removed");
      clearInterval(updaterInterval);
    }
  }, [location]);

  return (
    <Container>
      <Place>
        <PlaceText>{place.street},</PlaceText>
        <PlaceText> {place.city}</PlaceText>
      </Place>
      <CountryText>{place.country}</CountryText>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around"}}>
        <GeocodeText>LAT: {location.lat}, </GeocodeText>
        <GeocodeText>LON: {location.long}</GeocodeText>
      </View>
    </Container>
  );
}

export default LocationTrack;
