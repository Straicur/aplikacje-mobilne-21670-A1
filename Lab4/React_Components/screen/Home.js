import * as React from 'react';
import { View, Text, Button, TouchableOpacity ,ScrollView } from 'react-native';
import styles from '../static/styles';

export default function Home({navigation}) {
    return (
      <View style={styles.home.homeContainer}>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('TextInput')} >
          <Text style={styles.home.homeText}>Text Input</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('PickerSelect')} >
          <Text style={styles.home.homeText}>Picker Select</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('SwitchScr')} >
          <Text style={styles.home.homeText}>Switch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('ToastScr')} >
          <Text style={styles.home.homeText}>Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('DatePicker')} >
          <Text style={styles.home.homeText}>DatePicker</Text>
        </TouchableOpacity>
        
      </View>
    );
  }