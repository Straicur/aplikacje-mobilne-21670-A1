import * as React from 'react';
import { View, Text, Button, TouchableOpacity ,ScrollView } from 'react-native';
import styles from '../static/styles';

export default function Home({navigation}) {
    return (
      <View style={styles.home.homeContainer}>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('FilterSort')} >
          <Text style={styles.home.homeText}>Filter Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('LazyLoading')} >
          <Text style={styles.home.homeText}>Lazy Loading </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('FirstStepProgress')} >
          <Text style={styles.home.homeText}>First Step Progress</Text>
        </TouchableOpacity>
      </View>
    );
  }