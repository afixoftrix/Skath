import React from 'react';
import styled from 'styled-components/native';
import { Provider as ReduxProvider} from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import Navbar from './src/Components/Navbar';
import Home from './src/Pages/Home';
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";
import PreTracker from './src/Pages/PreTracker';
import store from './src/redux/store';
import Tracker from './src/Pages/Tracker';
import Records from './src/Pages/Records';

const AppContainer = styled.View`
  padding: 10px;
`;

const Root = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
  });
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        {!fontsLoaded ? (
          <Text>...loading</Text>
        ) : (
          <Root.Navigator>
            <Root.Screen name="Home" component={Home} />
            <Root.Screen name="Set Tracker" component={PreTracker} />
            <Root.Screen name="Tracker" component={Tracker} />
            <Root.Screen name="Records" component={Records} />
          </Root.Navigator>
        )}
      </NavigationContainer>
    </ReduxProvider>
  );
  // return (
  //   <SafeAreaView>
  //     { fontsLoaded ? 
  //       <AppContainer style={{ fontFamily: "SourceSansPro_400Regular"}}>
  //         <Navbar />
  //         <Home />
  //       </AppContainer> 
  //       : <Text>...loading</Text>
  //     }
  //   </SafeAreaView>
  // );
}
      //    <StatusBar style="auto" />;


