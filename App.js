import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navbar from './src/Components/Navbar';
import styled from 'styled-components/native';
import Home from './src/Pages/Home';
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";

const AppContainer = styled.View`
  padding: 10px;
`;

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
  });
  return (
    <SafeAreaView>
      { fontsLoaded ? 
        <AppContainer style={{ fontFamily: "SourceSansPro_400Regular"}}>
          <Navbar />
          <Home />
        </AppContainer> 
        : <Text>...loading</Text>
      }
    </SafeAreaView>
  );
}
      //    <StatusBar style="auto" />;


