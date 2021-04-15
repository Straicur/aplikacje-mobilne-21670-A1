import * as React from 'react';
import { View, Text, Button, TouchableOpacity ,ScrollView } from 'react-native';
import styles from '../static/styles';

export default function Home({navigation}) {
    return (
      <View style={styles.home.homeContainer}>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('ImageScreen')} >
          <Text style={styles.home.homeText}>Obrazy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('ResizeImageScreen')} >
          <Text style={styles.home.homeText}>Zmiana rozmiaru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('LazyIconsScreen')} >
          <Text style={styles.home.homeText}>Leniwe ładowanie i ikony</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('ConnectionScreen')} >
          <Text style={styles.home.homeText}>Stan połączenia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('AsyncStorageScreen')} >
          <Text style={styles.home.homeText}>Zapis danych</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('SyncScreen')} >
          <Text style={styles.home.homeText}>Synchronizacja danych</Text>
        </TouchableOpacity>
        
      </View>
    );
  }