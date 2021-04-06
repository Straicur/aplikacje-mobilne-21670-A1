import * as React from 'react';
import { View, Text, Button, TouchableOpacity ,ScrollView } from 'react-native';
import styles from '../static/styles';

export default function Home({navigation}) {
    return (
      <View style={styles.home.homeContainer}>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('FirstScroll')} >
          <Text style={styles.home.homeText}>First Scroll</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('SecondScroll')} >
          <Text style={styles.home.homeText}>Second Scroll</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('SwipeScreen')} >
          <Text style={styles.home.homeText}>Swipe Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('TouchableScreen')} >
          <Text style={styles.home.homeText}>Touchable Screen</Text>
        </TouchableOpacity> 
      </View>
    );
  }