import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './React_Components/screen/Home';
import FilterSort from './React_Components/screen/FilterSort';
import FirstStepProgress from './React_Components/screen/FirstStepProgress';
import LazyLoading from './React_Components/screen/LazyLoading';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />      
        <Stack.Screen name="FilterSort" component={FilterSort} />
        <Stack.Screen name="LazyLoading" component={LazyLoading} />
        <Stack.Screen name="FirstStepProgress" component={FirstStepProgress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
