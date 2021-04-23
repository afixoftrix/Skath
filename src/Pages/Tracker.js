import React from 'react'
import styled from 'styled-components';
import { View, Text } from 'react-native'
import StopWatch from '../Components/Tracks/StopWatch'


const Page = styled.View`
  padding: 10px;
`;

const Tracker = () => {
  return (
    <Page>
      <StopWatch />
      
    </Page>
  )
}

export default Tracker
