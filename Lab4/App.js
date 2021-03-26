import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './React_Components/screen/Home';
import TextInput from './React_Components/screen/TextInput';
import PickerSelect from './React_Components/screen/PickerSelect';
import SwitchScr from './React_Components/screen/SwitchScr';
import ToastScr from './React_Components/screen/ToastScr';
import DatePicker from './React_Components/screen/DatePicker';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />      
        <Stack.Screen name="TextInput" component={TextInput} />
        <Stack.Screen name="PickerSelect" component={PickerSelect} />
        <Stack.Screen name="SwitchScr" component={SwitchScr} />
        <Stack.Screen name="ToastScr" component={ToastScr} />
        <Stack.Screen name="DatePicker" component={DatePicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
