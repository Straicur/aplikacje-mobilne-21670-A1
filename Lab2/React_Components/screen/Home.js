import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../static/styles';

export default function Home({navigation}) {
    return (
      <View style={styles.home.homeContainer}>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('HookUseState')} >
          <Text style={styles.home.homeText}>Hook Use State</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}   onPress={() => navigation.navigate('RestParameters')} >
          <Text style={styles.home.homeText}>Rest Parameters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('SpreadOperator')} >
          <Text style={styles.home.homeText}>Spread Operator</Text>
        </TouchableOpacity>
      </View>
    );
  }