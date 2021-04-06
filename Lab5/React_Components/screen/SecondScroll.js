import React ,{Component,useEffect}  from 'react';
import { ScrollView,View} from 'react-native';
import styles from '../static/styles';

export default class SecondScroll extends Component {
    render(){
        return (
          <View >
                <ScrollView contentContainerStyle={styles.secondScreen.scrollView}>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "#99c09d" }]}/>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "orange" }]}/>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "red" }]}/>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "#00c000" }]}/>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "#96ceb4" }]}/>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "yellow" }]}/>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "green" }]}/>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "purple" }]}/>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "#ff9636" }]}/>
                    <View style={[styles.secondScreen.viewBox, { backgroundColor: "#000080" }]}/>   
                </ScrollView>
          </View>
          
        );
      }
  }