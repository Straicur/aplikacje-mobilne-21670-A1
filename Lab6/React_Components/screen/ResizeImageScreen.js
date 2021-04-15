import React ,{Component}  from 'react';
import { View,Image, Text,Slider, Button, TouchableOpacity,ScrollView  } from 'react-native';
import styles from '../static/styles';

export default class ResizeImageScreen extends Component {
    state = {
      firstImageScale: 1
    }
    resizeFirstImage = (value) => {
        this.setState({firstImageScale: value});
    }

    render(){
        return (
          <View style ={styles.resizableScreen.container}>
            <View><Text style ={styles.resizableScreen.text}>Zmiana rozmiaru obrazu</Text></View>
            <View >
                <View style ={styles.resizableScreen.center}>  
                    <Image  source={{ uri: "https://www.telepolis.pl/images/2020/04/bing-tapeta.png" }} style={[styles.screen.image, {transform: [{ scale: this.state.firstImageScale }]}]} /> 
                    <Slider
                        style={{width: 400, height: 40}}
                        value={1}
                        minimumValue={0.1}
                        maximumValue={2}
                        thumbTintColor='#FFFFFF'
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onValueChange={this.resizeFirstImage}
                    />
                </View>
            </View>
          </View>
          
        );
      }
  }