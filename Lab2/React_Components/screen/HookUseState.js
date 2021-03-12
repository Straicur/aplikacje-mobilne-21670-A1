import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../static/styles';

export default function HookUseState({navigation}) {
    return (
      <View style = {styles.hookUseState.hookContainer}>
        <Text style = {styles.hookUseState.hookText}>UseState Hook. Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta a UseState jest właśnie hookiem który deklaryje "zmienną stanu" i pozwala nam korzystać ze stanu w komponencie funkcyjnym przez co możemy zmienić stan naszego komponentu.</Text>
        <View style = {styles.hookUseState.hookEx}> 
          <Text style = {styles.hookUseState.hookTextEx}>{
` import React, { useState } from 'react';
 function Example() {
   const [count, setCount] = useState(0);
   return (
      <div>
        <p>Kliknięto {count} razy</p>
        <button onClick={() => setCount(count + 1)}>
         Kliknij mnie
        </button>
      </div>
    );
  }`
          }</Text>
        </View>
        <View style={styles.hookUseState.hookButtons}>
          <TouchableOpacity style={styles.hookUseState.hookButton}  onPress={() => navigation.navigate('RestParameters')} >
            <Text>Rest Parameters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hookUseState.hookButton} onPress={() => navigation.navigate('SpreadOperator')} >
            <Text>Spread Operator</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }