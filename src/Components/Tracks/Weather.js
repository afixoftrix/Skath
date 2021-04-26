import React, { useEffect } from 'react';
import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../redux/weather';

/**
 * 
 * test coords
 * lon: -96.796989
 * lat: 32.776665
 * temperature & sky values
 */

const Container = styled.View`
  border: 2px solid #000;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  margin: 5px 0;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  width: 100%;
  font-family: SourceSansPro_700Bold;
`;

const Data = styled.Text`
  font-size: 24px;
  text-align: center;
`;

const WeatherTrack = ({ location }) => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector( state => state.weather);

  useEffect(() => {
    dispatch(getWeather({ lat: location.lat, long: location.long })); 
  }, [])

  try {
    if (loading){
      return (
        <Container>
          <Text>Loading</Text>
        </Container>
      );
    }
    else {
      return (
        <Container>
          <View>
            <Title>Temp</Title>
            <Data>{data.main.temp || 0} ˚F</Data>
          </View>
          <View>
            <Title>Sky</Title>
            <Data>{data.weather[0].main || 0}</Data>
            <Image
              source={{
                uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                width: 50,
                height: 50,
              }}
            />
          </View>
        </Container>
      );
    }
  } catch (error) {
    return (
      <Container>
        <Text>Loading</Text>
      </Container>
    );
  }
};

WeatherTrack.defaultProps = {
  location: { lat: 32.776665, long: -96.796989 },
};

export default WeatherTrack;
