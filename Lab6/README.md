# React-CLI z Expo

# Działanie 
Nawigacja w aplikacji prawię się nie zmieniła od poprzedniego labolatorium, natomiast stworzyłem 6 nowych ekranów na potrzebę labolatorium
<br>
Aplikacja po włączeniu wyślwietla 6 przyciski z różnym działaniem:
<ul>
  <li>Obrazy - Znajdują się w nim dwa zdjęcia z dwoma sposobami wskazywania źródła.</li>
  <li>Zmiana rozmiaru - Znajduje się w nim zdjecie z możliwością zmiany jego rozmiaru.</li>
  <li>Leniwe ładowanie i ikony - Znajduje się w nim zdjęcie[8K] ładowane z uri oraz przykładowe ikony SVG z EvilIcons, Ionicons i SimpleLineIcons.</li>
  <li>Stan połączenia - Znajdują sie w nim informacje o połączeniu które zostały wyciągniete przy pomocy NetInfo. </li>
  <li>Zapis danych - Znajduje się w nim możliwość wprowadzenia danych do zasobów lokalnych podając klucz i wartość oraz jest możliwośćwyświetlenia ich po kluczu.</li>
  <li>Synchronizacja danych - Znajduje się w nim logika synchronizacji danych.</li>
</ul>  

# Style dla komponentów

<br>

  - ***styles.home*** zawiera style do ***Home.js*** </li>
  - ***styles.imageScreen*** zawiera style do ***ImageScreen.js*** </li>
  - ***styles.resizableScreen*** zawiera style do ***ResizeImageScreen.js*** </li>
  - ***styles.lazyscreen*** zawiera style do ***LazyIconsScreen.js*** </li>
  - ***styles.connectionScrreen*** zawiera style do ***ConnectionScreen.js*** </li>
  - ***styles.asyncScreen*** zawiera style do ***AsyncStorageScreen.js*** </li>
  - ***styles.syncScreen*** zawiera style do ***SyncScreen.js*** </li>

<br>

## styles.js

```js
import { StyleSheet } from 'react-native';

const styles = {}
    styles.home = StyleSheet.create({
        homeContainer: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#000',
        },
        homeButton: {
            flex: 1,
            backgroundColor: '#c2e0dd',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 44,
            marginVertical: 18,
            borderRadius:30,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 10,
        },
        homeText: {
            fontSize: 25,
        },

    });
    styles.imageScreen = StyleSheet.create({
        title:{
            color:'#000',
            fontSize:40,
        },
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            padding:2
        },
        textContainer:{
            height:'8%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text:{
            color:'#000',
            fontSize:20,
        },
        body:{
            backgroundColor:'#fff',
            padding:2
        },
        center:{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
    
    styles.connectionScrreen = StyleSheet.create({
        body: {
            flex: 1,
            padding: 20,
            alignItems: 'center',
            backgroundColor: '#CDFCE2',
          },
          detail: {
            fontSize: 12,
            textAlign: 'center',
            fontSize:25,
            margin:5,
            color: '#000000',
          },
          title:{
            color:'#000',
            fontSize:32,
            fontWeight:'bold',
            textAlign: 'center',
          }
    });
    styles.asyncScreen = StyleSheet.create({
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            
        },
        button:{
            backgroundColor:"#fff",
            paddingHorizontal:'10%',
            paddingVertical:'5%',
            margin:'5%',
            borderRadius:10,
            borderWidth: 1,
        },
        title:{
            fontSize:32,
            fontWeight:'bold',
            textAlign: 'center', 
            marginBottom:30
        },
        text:{
            fontSize:22,
            fontWeight:'bold',
            textAlign: 'center', 
        },
        input:{
            backgroundColor:"#fff",
            flexDirection: 'row',
            padding:5,
            margin:4,
        }
    });
    styles.syncScreen = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            padding:1,
          },
        title:{
            fontSize:32,
            fontWeight:'bold',
            textAlign: 'center', 
        },
        context:{
            padding:8
        }
    });
    styles.lazyscreen = StyleSheet.create({
        body: {
            flex: 1,
            backgroundColor: '#fff',
          },
        container:{
            display:'flex',
            flexDirection:'column',
            width:'100%'
        },
        text:{
            fontSize:22,
            fontWeight:'bold',
            textAlign: 'center', 
            padding:2
        },
        textContainer:{
            alignItems: 'center',
            justifyContent: 'center'
        },
        icons:{
            backgroundColor:'#B7FFBE',
            flexDirection:'row',
            paddingHorizontal:'2%',
            width:'100%'
        }
    });
    styles.resizableScreen = StyleSheet.create({
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            backgroundColor:'#CDE9FC'
        },
        center:{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text:{
            fontSize:40,
            color:'black',
            textAlign:'center'
        }
    });    
    styles.screen = StyleSheet.create({
        image: {
            width: 435, 
            height: 250,
        },
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            backgroundColor:'white'
        },

    });
    export default styles
```

# Komponenty



## App.js

Główny widok odpowiadający za nawigację po ekranach , Home ustawiony został na domyślny

```js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './React_Components/screen/Home';
import ImageScreen from './React_Components/screen/ImageScreen';
import ResizeImageScreen from './React_Components/screen/ResizeImageScreen';
import LazyIconsScreen from './React_Components/screen/LazyIconsScreen';
import ConnectionScreen from './React_Components/screen/ConnectionScreen';
import AsyncStorageScreen from './React_Components/screen/AsyncStorageScreen';
import SyncScreen from './React_Components/screen/SyncScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />      
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="ResizeImageScreen" component={ResizeImageScreen} />
        <Stack.Screen name="LazyIconsScreen" component={LazyIconsScreen} />
        <Stack.Screen name="ConnectionScreen" component={ConnectionScreen} />
        <Stack.Screen name="AsyncStorageScreen" component={AsyncStorageScreen} />
        <Stack.Screen name="SyncScreen" component={SyncScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```

## Home.js

Home jest to domyślny ekran z przyciskami przekierowywujacymi do odpowiedniego ekranu

![list](/Lab6/SCR/0.PNG "Start")

```js
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
```

## ImageScreen.js

Komponent ładuje 2 obrazu identycznej rozdzielczosci ładowane na dwa sposoby. Sposób ładowania z assets jest ciut szybszy.

```js
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
```

Wygląd komponentu

![list](/Lab6/SCR/1.PNG "Start")


## ResizeImageScreen.js

Ekran korzysta z Slider i jego metody onValueChange  aby zmieniać rozmiar komponentu Image.

```js
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
```

Wygląd ekranu ze stanem początkowym 

![list](/Lab6/SCR/2.PNG "Start")

Wygląd ekranu po przesunięiu slidera w lewo(zmniejszenie)

![list](/Lab6/SCR/3.PNG "Start")

Wygląd ekranu po przesunięiu slidera w prawo(zwiększenie)

![list](/Lab6/SCR/4.PNG "Start")

## LazyIconsScreen.js

Ekran ładuje obraz rozdzielczości 7680x4320px oraz dużą ilość ikon. Obraz ładuje się praktycznie natychmiastowo natomias ikony potrzebują chwili.

```js
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
```

Ekran po wejściu 

![list](/Lab6/SCR/5.PNG "Start")

Ekran po odczekaniu chwili i ząładowaniu się wszystkich ikon

![list](/Lab6/SCR/6.PNG "Start")

## ConnectionScreen.js

Ekran ten wyświetla informacje o połączeniu gdy jest włączone i wyłączone przy pomocy NetInfo.

```js
import React ,{Component}  from 'react';
import { View, Text, Button, TouchableOpacity,ScrollView ,StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import styles from '../static/styles';

export default class ConnectionScreen extends Component {
  NetInfoSubscribtion = null;

  constructor(props) {
    super(props);
    this.state = {
      connection_status: false,
      connection_type: null,
      connection_net_reachable: false,
      connection_wifi_enabled: false,
      connection_details: null,
    }
  }

  componentDidMount() {

    this.NetInfoSubscribtion = NetInfo.addEventListener(
      this._handleConnectivityChange,
    );

  }

  componentWillUnmount() {
    this.NetInfoSubscribtion && this.NetInfoSubscribtion();
  }

  _handleConnectivityChange = (state) => {
    this.setState({
      connection_status: state.isConnected,
      connection_type: state.type,
      connection_net_reachable: state.isInternetReachable,
      connection_wifi_enabled: state.isWifiEnabled,
      connection_details: state.details,
    })
  }
    render(){
        return (
          <View style={styles.connectionScrreen.body}>
        <Text style={styles.connectionScrreen.title}>
            Inforrmacje o połączeniu :{'\n'}
        </Text>
        <Text style={styles.connectionScrreen.detail}>
          Connection Status : {this.state.connection_status ? 'Connected' : 'Disconnected'}
        </Text>
        
        <Text style={styles.connectionScrreen.detail}>
          Connection Type : {this.state.connection_type}
        </Text>
        <Text style={styles.connectionScrreen.detail}>
          Internet Reachable : {this.state.connection_net_reachable ? 'YES' : 'NO'}
        </Text>
        <Text style={styles.connectionScrreen.detail}>
          Wifi Enabled : {this.state.connection_wifi_enabled ? 'YES' : 'NO'} {'\n'}
        </Text>
        <Text style={styles.connectionScrreen.title}>
          Connection Details : {'\n'}
        </Text>
          <Text style={styles.connectionScrreen.detail}>
          {this.state.connection_type == 'wifi' ?
            (this.state.connection_details.isConnectionExpensive ? 'Connection Expensive: YES' : 'Connection Expensive: NO')
              + '\n'
              + 'ssid: ' + this.state.connection_details.ssid
              + '\n'
              + 'bssid: ' + this.state.connection_details.bssid
              + '\n'
              + 'strength: ' + this.state.connection_details.strength
              + '\n'
              + 'ipAddress: ' + this.state.connection_details.ipAddress
              + '\n'
              + 'subnet: ' + this.state.connection_details.subnet
              + '\n'
              + 'frequency: ' + this.state.connection_details.frequency
            :
            this.state.connection_type == 'cellular' ?
              (this.state.connection_details.isConnectionExpensive ? 'Connection Expensive: YES' : 'Connection Expensive: NO')
                + '\n'
                + 'cellularGeneration: ' + this.state.connection_details.cellularGeneration
                +'\n'
                +'carrier: '+this.state.connection_details.carrier
              :
              '---'
          }
          </Text>
      </View>
          
        );
      }
  }

  

```

Informacje o sieci przy włączonym połączeniu

![list](/Lab6/SCR/7.PNG "Start")

Informacje o sieci przy wyłączonym połączeniu

![list](/Lab6/SCR/8.PNG "Start")

## AsyncStorageScreen.js

Ekran zawiera dwa formularze. Pierwszy pozwala na dodanie wprowadzonych danych do zasobów lokalnych natomiast drugi pozwala na wyświetlenie zapisanych danych przy pomocy klucza.

```js
import React, {Component, useEffect, useState } from 'react';
import { Button, ScrollView, Text,TextInput, View,TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../static/styles';

export default class AsyncStorageScreen extends Component {
  constructor(){
    super()
}
state = {
    Key:'',
    Value:'',
    readKey:''
}
storeData = async () => {
    var key = this.state.Key
    var value = this.state.Value
    await AsyncStorage.setItem(key,value);
    
};
retrieveData = async () => {
    var key = this.state.readKey
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
        alert('Klucz to:'+key+' Wartość to:'+value);
    }else{
        alert('Podany element nie istnieje');
    }

};
render(){ 
    return (
        <View style = {styles.asyncScreen.container} >
            <View >
                <Text style = {styles.asyncScreen.title} >Zapis danych za pomocą AsyncStorage</Text>
            </View>
            <View >
                    <View >
                        <Text style = {styles.asyncScreen.text} >Podaj wartość do zapisania</Text>
                        <View style={styles.asyncScreen.input}>
                            <TextInput onEndEditing={event =>{this.setState({Key: event.nativeEvent.text})}} placeholder="Podaj klucz" />
                        </View>
                        <View style={styles.asyncScreen.input}>
                            <TextInput onEndEditing={event =>{this.setState({Value: event.nativeEvent.text})}} placeholder="Wpisz wartość" />
                        </View>
                        <Button
                            title='Dodaj'
                            style = {styles.asyncScreen.button} 
                            onPress={this.storeData}
                            
                        >
                        </Button>
                    </View>
                    <View >
                        <Text style = {styles.asyncScreen.text}  >Podaj klucz aby odczytać dane</Text>
                        <View style={styles.asyncScreen.input}>
                            <TextInput onEndEditing={event =>{this.setState({readKey: event.nativeEvent.text})}}/>
                        </View>
                        <Button
                            title='Wyświetl'
                            style = {styles.asyncScreen.button} 
                            onPress={this.retrieveData}   
                        >
                        </Button>
                        
                    </View>
            </View>
        </View>
          )
        }
    }
```

Ekran startowy i dodanie wartości

![list](/Lab6/SCR/9.PNG "Start")

Wyświetlenie wartości w alercie 

![list](/Lab6/SCR/10.PNG "Start")

## Store.js

Komponent kóry zawiera całą logikę odpowiadającą za zapisywanie i pobieranie  danych przy pomocy NetInfo  i jego eventLisenera , nasłuchuje zmian w połączeniu oraz zajmuje się synchronizacją danych przy trybie offline przy urzyciu AsyncStorage , jest wykorzystywany później.

```js
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";


const fakeNetworkData = {
  first: false,
  second: false,
  third: false
};

let connected = false;


const unsynced = [];



export function set(key, value) {
  return new Promise((resolve, reject) => {
    if (connected) {

      fakeNetworkData[key] = value;
      resolve(true);
    } else {
      AsyncStorage.setItem(key, value.toString()).then(
        () => {
          unsynced.push(key);
          resolve(false);
        },
        err => reject(err)
      );
    }
  });
}

export function get(key) {
  return new Promise((resolve, reject) => {
    if (connected) {
      resolve(key ? fakeNetworkData[key] : fakeNetworkData);
    } else if (key) {
      AsyncStorage.getItem(key).then(
        item => resolve(item),
        err => reject(err)
      );
    } else {
      AsyncStorage.getAllKeys().then(
        keys =>
          AsyncStorage.multiGet(keys).then(
            items => resolve(Object.fromEntries(items)),
            err => reject(err)
          ),
        err => reject(err)
      );
    }
  });
}

NetInfo.fetch().then(
  connection => {
    connected = ["wifi", "unknown"].includes(connection.type);
  },
  () => {
    connected = false;
  }
);

NetInfo.addEventListener(connection => {
  connected = ["wifi", "unknown"].includes(connection.type);

  if (connected && unsynced.length) {
    AsyncStorage.multiGet(unsynced).then(items => {
      items.forEach(([key, val]) => set(key, val));
      unsynced.length = 0;
    });
  }
});
```


## SyncScreen.js

Komponent ten wykorzystuje funkcje set i get z komponentu store oraz zawarta jest w nim już całe działanie. Po kliknięciu w Switch w zależności od stanu połączenia.

```js
import React, { useState, useEffect } from "react";
import { View, Text,Button, TouchableOpacity, TextInput, SafeAreaView, StyleSheet, ScrollView, Image,Switch } from 'react-native';
import styles, {SynchStyles} from '../static/styles.js';
import NetInfo from "@react-native-community/netinfo";
import { set, get } from "./Store";


const boolMap = {
  true: true,
  false: false
};


export default function SyncScreen (){
  const [message, setMessage] = useState(null);
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const setters = new Map([
      ["first", setFirst],
      ["second", setSecond],
      ["third", setThird]
    ]);

    function save(key) {
      return value => {
        set(key, value).then(
          connected => {
            setters.get(key)(value);
            setMessage(connected ? "Saved Online" : "Saved Offline");
          },
          err => {
            setMessage(err);
          }
        );
      };
    }
    
    useEffect(() => {
      NetInfo.fetch().then(() =>
        get().then(
          items => {
            for (let [key, value] of Object.entries(items)) {
              setters.get(key)(value);
            }
          },
          err => {
            setMessage(err);
          }
        )
      );
    }, []);
  
    return (
      <View style={styles.syncScreen.container}>
        <Text style={styles.syncScreen.title}>{message}</Text>
        <View style={styles.syncScreen.context}>
          <Text>First</Text>
          <Switch
            value={boolMap[first.toString()]}
            onValueChange={save("first")}
          />
        </View>
        <View style={styles.syncScreen.context}>
          <Text>Second</Text>
          <Switch
            value={boolMap[second.toString()]}
            onValueChange={save("second")}
          />
        </View>
        <View style={styles.syncScreen.context}>
          <Text>Third</Text>
          <Switch
            value={boolMap[third.toString()]}
            onValueChange={save("third")}
          />
        </View>
      </View>
    );
}
```

Wygląd ekranu po kliknieiu w slider z włączonym połączeniem z siecią (pojawia się wiadomość że zapisaliśmy dane online)

![list](/Lab6/SCR/12.PNG "Start")

Wygląd ekranu po kliknieiu w slider z wyłączonym połączeniem z siecią (pojawia się wiadomość że zapisaliśmy dane offline)

![list](/Lab6/SCR/11.PNG "Start")
