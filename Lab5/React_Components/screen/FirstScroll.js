import React ,{Component}  from 'react';
import { View, Text, Button, TouchableOpacity,ScrollView  } from 'react-native';
import styles from '../static/styles';

export default class FirstScroll extends Component {
    render(){
        return (
          <View >
                <ScrollView contentContainerStyle={styles.firstScreen.scrollView}>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "#99c09d" }]}/>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "orange" }]}/>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "red" }]}/>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "#00c000" }]}/>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "#96ceb4" }]}/>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "yellow" }]}/>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "green" }]}/>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "purple" }]}/>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "#ff9636" }]}/>
                    <View style={[styles.firstScreen.viewBox, { backgroundColor: "#000080" }]}/>   
                </ScrollView>
          </View>
          
        );
      }
  }