# React-CLI z Expo

# Działanie 
Nawigacja w aplikacji prawię się nie zmieniła od poprzedniego labolatorium, natomiast stworzyłem 6 nowych ekranów na potrzebę labolatorium
<br>
Aplikacja po włączeniu wyślwietla 6 przyciski z różnym działaniem:
<ul>
  <li>Obrazy - </li>
  <li>Zmiana rozmiaru - </li>
  <li>Leniwe ładowanie i ikony - EvilIcons,Ionicons,SimpleLineIcons</li>
  <li>Stan połączenia - </li>
  <li>Zapis danych - </li>
  <li>Synchronizacja danych - </li>
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

```js
```

![list](/Lab6/SCR/1.PNG "Start")


## ResizeImageScreen.js

```js
```

![list](/Lab6/SCR/2.PNG "Start")

![list](/Lab6/SCR/3.PNG "Start")

![list](/Lab6/SCR/4.PNG "Start")

## LazyIconsScreen.js

```js
```

![list](/Lab6/SCR/5.PNG "Start")

![list](/Lab6/SCR/6.PNG "Start")

## ConnectionScreen.js

```js
```

![list](/Lab6/SCR/7.PNG "Start")

![list](/Lab6/SCR/8.PNG "Start")

## AsyncStorageScreen.js

```js
```

![list](/Lab6/SCR/9.PNG "Start")

![list](/Lab6/SCR/10.PNG "Start")

## Store.js


```js
```


## SyncScreen.js

```js
```

![list](/Lab6/SCR/11.PNG "Start")

![list](/Lab6/SCR/12.PNG "Start")
