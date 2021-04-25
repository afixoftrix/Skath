import React from 'react'
import styled from 'styled-components';
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import TitleDesc from '../Components/TitleDesc'
import {HomeContainer} from '../Pages/Home';
import { ScrollView } from 'react-native-gesture-handler';

/**
 * Records component that renders the Records page.
 * Lists data points per session.
 */

const Date = styled.Text`
  font-family: SourceSansPro_700Bold;
  font-size: 18px;
`;
const DataNode = styled.View`
  margin: 10px 0;
`;
const Border = styled.View`
  height: 2px;
  background-color: #000;
  width: 100%;
`;


const Records = () => {
  const { records } = useSelector(state => state.records);
  
  if (records.length === 0){
    return (
      <HomeContainer>
        <TitleDesc title="Track Records">
          <Text>
            Sorry, no records yet. Head over to "Start Tracking" to get some data
          </Text>
        </TitleDesc>
      </HomeContainer>
    );
  }
  else {
   return (
      <HomeContainer>
      <TitleDesc title="Track Records">
        <Text style={{paddingRight: 40, fontSize: 16, lineHeight: 22 }}>
          This page contains data that you have tracked.
        </Text>
      </TitleDesc>
      <ScrollView>
        {
          records.map(( {date, data}, i) => {
            return (
              <View key={i}>
                <Date>Date: {date}</Date>
                { data.map((datum,i) => {
                  console.log(datum);
                  return (
                    <DataNode key={i}>
                      <Text style={{ fontWeight: "700" }}>
                        Datum: {i}_________________________
                      </Text>
                      <Text>
                        location: {`${datum.location.long}(long), ${datum.location.lat}(lat)`}
                      </Text>
                      <Text>temp: {datum.temp} ˚F</Text>
                      <Text>weather: {datum.weather}</Text>
                      <Text>steps: {datum.steps}</Text>
                      <Text>time: {datum.timeStamp}</Text>
                    </DataNode>
                  );
                })}

              </View>
            );
          })
        }
      </ScrollView>
    </HomeContainer>
   )
  }
}

export default Records
