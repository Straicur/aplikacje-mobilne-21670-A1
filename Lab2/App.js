import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './React_Components/screen/Home';
import HookUseState from './React_Components/screen/HookUseState';
import RestParameters from './React_Components/screen/RestParameters';
import SpreadOperator from './React_Components/screen/SpreadOperator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HookUseState" component={HookUseState} />
        <Stack.Screen name="RestParameters" component={RestParameters} />
        <Stack.Screen name="SpreadOperator" component={SpreadOperator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;