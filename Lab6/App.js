import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './React_Components/screen/Home';
import ImageScreen from './React_Components/screen/ImageScreen';
import ResizeImageScreen from './React_Components/screen/ResizeImageScreen';
import LazyIconsScreen from './React_Components/screen/LazyIconsScreen';
import ConnectionScreen from './React_Components/screen/ConnectionScreen';
import AsyncStorageScreen from './React_Components/screen/AsyncStorageScreen';
import SyncScreen from './React_Components/screen/SyncScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />      
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="ResizeImageScreen" component={ResizeImageScreen} />
        <Stack.Screen name="LazyIconsScreen" component={LazyIconsScreen} />
        <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} />
        <Stack.Screen name="AsyncStorageScreen" component={AsyncStorageScreen} />
        <Stack.Screen name="SyncScreen" component={SyncScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
