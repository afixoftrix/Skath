import React from 'react'
import styled from 'styled-components';
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';
import TitleDesc from '../Components/TitleDesc'
import {HomeContainer} from '../Pages/Home';
import { ScrollView } from 'react-native-gesture-handler';


const Date = styled.Text`
  font-family: SourceSansPro_700Bold;
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
      <View>
        {
          records.map(( {date, data}, i) => {
            return (
              <ScrollView key={i}>
                <Date>{date}</Date>
                { data.map((datum,i) => {
                  console.log(datum)
                  return (
                    <>
                    <DataNode key={i}>
                      <Text>{i}_________________________</Text>
                      <Text>location: {datum.location}</Text>
                      <Text>place: {datum.place}</Text>
                      <Text>temp: {datum.temp}</Text>
                      <Text>weather: {datum.weather}</Text>
                      <Text>steps: {datum.steps}</Text>
                      <Text>time: {datum.timeStamp}</Text>
                    </DataNode>
                    </>
                  );
                })}
                
              </ScrollView>
            );
          })
        }
      </View>
    </HomeContainer>
   )
  }
}

export default Records
