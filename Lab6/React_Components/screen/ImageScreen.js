import React ,{Component}  from 'react';
import { View,Image, Text, Button, TouchableOpacity,ScrollView  } from 'react-native';
import las from '../../assets/forest.jpg'; 
import styles from '../static/styles';

export default class ImageScreen extends Component {
    render(){
        return (
          <View style = {styles.imageScreen.body}>
            <View style = {styles.imageScreen.textContainer}>
                    <Text style = {styles.imageScreen.title}>Obrazy</Text>
            </View>
                <ScrollView >
                    <View style ={styles.screen.container}>
                      <View style ={styles.imageScreen.center}>
                              <Text style = {styles.imageScreen.text}>assets</Text>
                              <Image style ={styles.screen.image} source={las} /> 
                      </View>
                    </View>
                    <View style ={styles.screen.container}>
                      <View style ={styles.imageScreen.center}>
                              <Text style = {styles.imageScreen.text}>uri</Text>
                              <Image  source={{ uri: "https://images8.alphacoders.com/393/thumb-1920-393383.jpg" }} style ={styles.screen.image} /> 
                      </View>
                    </View>
                </ScrollView>
          </View>
          
        );
      }
  }