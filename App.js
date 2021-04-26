import React from 'react';
import { Provider as ReduxProvider} from 'react-redux'
import { Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

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
            <Root.Screen name="Tracker" component={Tracker} options={() => ({
              //get rid of the backbutton on the tracker page
              headerLeft: () => { return null }
            })} />
            <Root.Screen name="Records" component={Records} />
          </Root.Navigator>
        )}
      </NavigationContainer>
    </ReduxProvider>
  );
}


