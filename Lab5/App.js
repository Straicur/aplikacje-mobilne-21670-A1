import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './React_Components/screen/Home';
import FirstScroll from './React_Components/screen/FirstScroll';
import SecondScroll from './React_Components/screen/SecondScroll';
import SwipeScreen from './React_Components/screen/SwipeScreen';
import TouchableScreen from './React_Components/screen/TouchableScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />      
        <Stack.Screen name="FirstScroll" component={FirstScroll} />
        <Stack.Screen name="SecondScroll" component={SecondScroll} />
        <Stack.Screen name="SwipeScreen" component={SwipeScreen} />
        <Stack.Screen name="TouchableScreen" component={TouchableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
