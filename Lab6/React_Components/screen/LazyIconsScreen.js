import React ,{Component}  from 'react';
import { View, Text, Image,ScrollView  } from 'react-native';
import thumbnail from '../../assets/BF1.jpg'; 
import { EvilIcons,Ionicons,SimpleLineIcons } from '@expo/vector-icons';
import styles from '../static/styles';

export default class LazyIconsScreen extends Component {
    render(){
        return (
          <View style = {styles.lazyscreen.body}>
                <View style = {styles.lazyscreen.textContainer}>
                    <Text style = {styles.lazyscreen.text}>Leniwe ładowanie i ikony</Text>
                </View>
                <ScrollView contentContainerStyle ={{display:'flex',flexDirection:'column',width:'100%'}}>
                    <View >
                        <View>
                            <Text style = {styles.lazyscreen.text}>Obraz uri</Text>
                            <Image style = {styles.screen.image} loadingIndicatorSource={thumbnail} source={{ uri: "https://images2.alphacoders.com/706/thumbbig-706162.jpg" }}  progressiveRenderingEnabled={false}/>
                        </View>
                    </View> 
                    <View style ={{width:'100%'}}>
                        <Text style = {styles.lazyscreen.text}>Ikony</Text>    
                        <View style = {styles.lazyscreen.icons}>
                            <EvilIcons name="bell" size={32} color="black" />
                            <Ionicons name="airplane-outline" size={32} color="black" />
                            <SimpleLineIcons name="list" size={32} color="black" />
                            <EvilIcons name="cart" size={32} color="black" />
                            <EvilIcons name="calendar" size={32} color="black" />
                            <EvilIcons name="camera" size={32} color="black" />
                            <SimpleLineIcons name="phone" size={32} color="black" />
                            <SimpleLineIcons name="call-in" size={32} color="black" />
                            <SimpleLineIcons name="call-end" size={32} color="black" />
                            <Ionicons name="add-outline" size={32} color="black" />
                            <Ionicons name="alarm-outline" size={32} color="black" />
                            <Ionicons name="alert-outline" size={32} color="black" />
                        </View>
                        <View style = {styles.lazyscreen.icons}>
                            <EvilIcons name="image" size={32} color="black" />
                            <Ionicons name="ribbon-outline" size={32} color="black" />
                            <SimpleLineIcons name="map" size={32} color="black" />
                            <EvilIcons name="clock" size={32} color="black" />
                            <EvilIcons name="eye" size={32} color="black" />
                            <EvilIcons name="like" size={32} color="black" />
                            <SimpleLineIcons name="compass" size={32} color="black" />
                            <SimpleLineIcons name="direction" size={32} color="black" />
                            <SimpleLineIcons name="directions" size={32} color="black" />
                            <Ionicons name="arrow-redo-outline" size={32} color="black" />
                            <Ionicons name="arrow-up-outline" size={32} color="black" />
                            <Ionicons name="arrow-down-outline" size={32} color="black" />
                        </View>
                        <View style = {styles.lazyscreen.icons}>
                            <EvilIcons name="gear" size={32} color="black" />
                            <Ionicons name="barbell-outline" size={32} color="black" />
                            <SimpleLineIcons name="menu" size={32} color="black" />
                            <EvilIcons name="plus" size={32} color="black" />
                            <EvilIcons name="pencil" size={32} color="black" />
                            <EvilIcons name="star" size={32} color="black" />
                            <SimpleLineIcons name="options" size={32} color="black" />
                            <SimpleLineIcons name="arrow-left" size={32} color="black" />
                            <SimpleLineIcons name="arrow-right" size={32} color="black" />
                            <Ionicons name="bonfire-outline" size={32} color="black" />
                            <Ionicons name="book-outline" size={32} color="black" />
                            <Ionicons name="barcode-outline" size={32} color="black" />
                        </View>
                        <View style = {styles.lazyscreen.icons}>
                            <EvilIcons name="spinner" size={32} color="black" />
                            <Ionicons name="cart-outline" size={32} color="black" />
                            <SimpleLineIcons name="check" size={32} color="black" />
                            <EvilIcons name="undo" size={32} color="black" />
                            <EvilIcons name="trash" size={32} color="black" />
                            <EvilIcons name="tag" size={32} color="black" />
                            <SimpleLineIcons name="plus" size={32} color="black" />
                            <SimpleLineIcons name="minus" size={32} color="black" />
                            <SimpleLineIcons name="clock" size={32} color="black" />
                            <Ionicons name="heart-outline" size={32} color="black" />
                            <Ionicons name="key-outline" size={32} color="black" />
                            <Ionicons name="infinite-outline" size={32} color="black" />
                        </View>
                        <View style = {styles.lazyscreen.icons}>
                            <EvilIcons name="location" size={32} color="black" />
                            <Ionicons name="checkmark-outline" size={32} color="black" />
                            <SimpleLineIcons name="event" size={32} color="black" />
                            <EvilIcons name="gear" size={32} color="black" />
                            <EvilIcons name="lock" size={32} color="black" />
                            <EvilIcons name="heart" size={32} color="black" />
                            <SimpleLineIcons name="plane" size={32} color="black" />
                            <SimpleLineIcons name="mouse" size={32} color="black" />
                            <SimpleLineIcons name="energy" size={32} color="black" />
                            <Ionicons name="keypad-outline" size={32} color="black" />
                            <Ionicons name="leaf-outline" size={32} color="black" />
                            <Ionicons name="magnet-outline" size={32} color="black" />
                        </View>
                        <View style = {styles.lazyscreen.icons}>
                            <EvilIcons name="bell" size={32} color="black" />
                            <Ionicons name="cut-outline" size={32} color="black" />
                            <SimpleLineIcons name="crop" size={32} color="black" />
                            <EvilIcons name="unlock" size={32} color="black" />
                            <EvilIcons name="close" size={32} color="black" />
                            <EvilIcons name="link" size={32} color="black" />
                            <SimpleLineIcons name="shield" size={32} color="black" />
                            <SimpleLineIcons name="ghost" size={32} color="black" />
                            <SimpleLineIcons name="fire" size={32} color="black" />
                            <Ionicons name="medal-outline" size={32} color="black" />
                            <Ionicons name="male-outline" size={32} color="black" />
                            <Ionicons name="female-outline" size={32} color="black" />
                        </View>
                        <View style = {styles.lazyscreen.icons}>
                            <EvilIcons name="bell" size={32} color="black" />
                            <Ionicons name="football-outline" size={32} color="black" />
                            <SimpleLineIcons name="badge" size={32} color="black" />
                            <EvilIcons name="redo" size={32} color="black" />
                            <EvilIcons name="play" size={32} color="black" />
                            <EvilIcons name="minus" size={32} color="black" />
                            <SimpleLineIcons name="bell" size={32} color="black" />
                            <SimpleLineIcons name="vector" size={32} color="black" />
                            <SimpleLineIcons name="puzzle" size={32} color="black" />
                            <Ionicons name="sad-outline" size={32} color="black" />
                            <Ionicons name="skull-outline" size={32} color="black" />
                            <Ionicons name="walk-outline" size={32} color="black" />
                        </View>
                        <View style = {styles.lazyscreen.icons}>
                            <EvilIcons name="bell" size={32} color="black" />
                            <Ionicons name="airplane-outline" size={32} color="black" />
                            <SimpleLineIcons name="list" size={32} color="black" />
                            <EvilIcons name="cart" size={32} color="black" />
                            <EvilIcons name="calendar" size={32} color="black" />
                            <EvilIcons name="camera" size={32} color="black" />
                            <SimpleLineIcons name="phone" size={32} color="black" />
                            <SimpleLineIcons name="call-in" size={32} color="black" />
                            <SimpleLineIcons name="call-end" size={32} color="black" />
                            <Ionicons name="add-outline" size={32} color="black" />
                            <Ionicons name="alarm-outline" size={32} color="black" />
                            <Ionicons name="alert-outline" size={32} color="black" />
                        </View>
                        <View style = {styles.lazyscreen.icons}>
                            <EvilIcons name="bell" size={32} color="black" />
                            <Ionicons name="football-outline" size={32} color="black" />
                            <SimpleLineIcons name="badge" size={32} color="black" />
                            <EvilIcons name="redo" size={32} color="black" />
                            <EvilIcons name="play" size={32} color="black" />
                            <EvilIcons name="minus" size={32} color="black" />
                            <SimpleLineIcons name="bell" size={32} color="black" />
                            <SimpleLineIcons name="vector" size={32} color="black" />
                            <SimpleLineIcons name="puzzle" size={32} color="black" />
                            <Ionicons name="sad-outline" size={32} color="black" />
                            <Ionicons name="skull-outline" size={32} color="black" />
                            <Ionicons name="walk-outline" size={32} color="black" />
                        </View>
                    </View>
                </ScrollView>
          </View>
          
        );
      }
  }