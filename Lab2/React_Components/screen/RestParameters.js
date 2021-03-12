import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../static/styles';

export default function RestParameters({navigation}) {
    return (
      <View style = {styles.restParameters.restContainer}>
        <Text style = {styles.restParameters.restText}>Rest parameter służy jako parametr funkcji który jest w stanie pobrać nieokreśloną liczbę argumentów w postaci tablicy. Musi być ostatnim parametrem funkcji , można go wykorzystać do np. do funkcji wariadycznych oddzielenia czy kilku elementów od reszty.</Text>
        <View style = {styles.restParameters.restEx}>
          <Text style = {styles.restParameters.restTextEx} >{
          `function myF(first,...param) {
    console.log(first); // 1
    console.log(param); //[2, 3, 4, 5]
}
        
myF(1,2,3,4,5);`
          }</Text>
        </View>
        <View style={styles.restParameters.restButtons} >
          <TouchableOpacity style={styles.restParameters.restButton} onPress={() => navigation.navigate('HookUseState')} >
            <Text>HookUseState</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restParameters.restButton} onPress={() => navigation.navigate('SpreadOperator')} >
            <Text>Spread Operator</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }