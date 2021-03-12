# React-CLI z Expo
<br>

## Zadanie

<br>
<ul>
  <li>utworzyć 3 ekrany , na każdym umiescić opisy o spread operator,rest parameters i 'hook' useState </li>
  <li>każdy ekran ma posiadać przyciski do innych ekranów i ma byc ostylowany w innym stylu </li>
  <li>style w odzielnym pliku</li>
</ul>  
<br>
Tak jak wyżej wymieniłem , stworzyłem 4 ekrany przy pomocy @react-navigation + @react-navigation/stack o nazwie:
<ul>
  <li>Home</li>
  <li>HookUseState</li>
  <li>RestParameters</li>
  <li>SpreadOperator</li>
</ul>
Każdy z nich jest oddzielnym komponentem. Style zostały zawarte w oddzielnym pliku i odpowiednio zaimportowane.

## Wykorzystane narzędzia

Aplikacja głównie korzysta z @react-navigation.
<br>
Moduły wykorzystane do stworzenia oddzielnych ekranów:
<ul>
  <li>@react-navigation/native</li>
  <li>@react-navigation/stack</li>
</ul>
<br>

## App.js

Główny widok odpowiadający za nawigację po ekranach , Home ustawiony został na domyślny.

``` JS
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './React_Components/screen/Home';
import HookUseState from './React_Components/screen/HookUseState';
import RestParameters from './React_Components/screen/RestParameters';
import SpreadOperator from './React_Components/screen/SpreadOperator';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HookUseState" component={HookUseState} />
        <Stack.Screen name="RestParameters" component={RestParameters} />
        <Stack.Screen name="SpreadOperator" component={SpreadOperator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

## styles.js

Style są oddzielne dla każdego ekranu i ostylowane w innym stylu.

``` JS
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
            marginHorizontal: 54,
            marginVertical: 46,
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

    styles.hookUseState = StyleSheet.create({
        hookContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        hookText: {
            color:'#000',
            fontSize:17,
        },
        hookTextEx: {
            color:'#bbb',
            fontSize:14,
        },
        hookEx: {
            flex: 1,
            backgroundColor: '#444',
            justifyContent: 'center',
            marginHorizontal: 16,
            marginVertical: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 8,
            fontSize: 24,
        },
        hookButtons: {
            flexDirection: 'row',
        },
        hookButton: {
            flex: 1,
            backgroundColor: '#BD8EFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 6,
            marginHorizontal: 4,
            marginVertical: 10,
            paddingVertical: 16,
            borderRadius:30,
            elevation: 10,
        }
    });
    styles.restParameters = StyleSheet.create({
        restContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            marginVertical:128,
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        restText: {
            color:'#000',
            fontSize:17,
        },
        restTextEx: {
            color:'#fff',
            fontSize:16,
        },
        restEx: {
            flex: 1,
            backgroundColor: '#949494',
            justifyContent: 'center',
            marginHorizontal: 16,
            marginVertical: 32,
            paddingHorizontal:16,
            paddingVertical:16,
            borderRadius:8,
            fontSize:24,
        },
        restButtons: {
            flexDirection: 'row-reverse',
        },
        restButton: {
            flex: 1,
            backgroundColor: '#C6B44C',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 6,
            marginVertical: 10,
            paddingVertical: 16,
            borderRadius:10,
            elevation: 10,
        }

    });
    styles.spreadOperator = StyleSheet.create({
        spreadContainer: {
            flex: 1,
            backgroundColor: '#CCE8F0',
            alignItems: 'stretch',
            justifyContent: 'center',
            marginVertical:64,
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        spreadText: {
            color:'#000',
            fontSize:17,
        },
        spreadTextEx: {
            color:'#000',
            fontSize:13,
        },
        spreadEx: {
            flex: 1,
            backgroundColor: '#F6FBFC',
            justifyContent: 'center',
            marginVertical: 20,
            paddingHorizontal:16,
            paddingVertical:16,
            fontSize:24,
        },
        spreadButtons: {
            flexDirection: 'row',
        },
        spreadButton: {
            flex: 1,
            backgroundColor: '#65BAD2',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            marginVertical: 10,
            paddingVertical: 16,
            elevation: 10,
        }
    });
  

export default styles
```

## Home.js

Home jest to domyślny ekran z przyciskami przekierowywujacy do odpowiedniego ekranu.

``` JS
import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../static/styles';

export default function Home({navigation}) {
    return (
      <View style={styles.home.homeContainer}>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('HookUseState')} >
          <Text style={styles.home.homeText}>Hook Use State</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}   onPress={() => navigation.navigate('RestParameters')} >
          <Text style={styles.home.homeText}>Rest Parameters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('SpreadOperator')} >
          <Text style={styles.home.homeText}>Spread Operator</Text>
        </TouchableOpacity>
      </View>
    );
  }
```

![list](/Lab2/SCR/1.PNG "Start")

## HookUseState.js

``` JS
import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../static/styles';

export default function HookUseState({navigation}) {
    return (
      <View style = {styles.hookUseState.hookContainer}>
        <Text style = {styles.hookUseState.hookText}>UseState Hook. Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta a UseState jest właśnie hookiem który deklaryje "zmienną stanu" i pozwala nam korzystać ze stanu w komponencie funkcyjnym przez co możemy zmienić stan naszego komponentu.</Text>
        <View style = {styles.hookUseState.hookEx}> 
          <Text style = {styles.hookUseState.hookTextEx}>{
` import React, { useState } from 'react';
 function Example() {
   const [count, setCount] = useState(0);
   return (
      <div>
        <p>Kliknięto {count} razy</p>
        <button onClick={() => setCount(count + 1)}>
         Kliknij mnie
        </button>
      </div>
    );
  }`
          }</Text>
        </View>
        <View style={styles.hookUseState.hookButtons}>
          <TouchableOpacity style={styles.hookUseState.hookButton}  onPress={() => navigation.navigate('RestParameters')} >
            <Text>Rest Parameters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hookUseState.hookButton} onPress={() => navigation.navigate('SpreadOperator')} >
            <Text>Spread Operator</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }
```

![list](/Lab2/SCR/2.PNG "Start")

## RestParameters.js

``` JS
import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../static/styles';

export default function RestParameters({navigation}) {
    return (
      <View style = {styles.restParameters.restContainer}>
        <Text style = {styles.restParameters.restText}>Rest parameter służy jako parametr funkcji który jest w stanie pobrać nieokreśloną liczbę argumentów w postaci tablicy. Musi być ostatnim parametrem funkcji , można go wykorzystać do np. do funkcji wariadycznych oddzielenia czy kilku elementów od reszty.</Text>
        <View style = {styles.restParameters.restEx}>
          <Text style = {styles.restParameters.restTextEx} >{
          `function myF(first,...param) {
    console.log(first); // 1
    console.log(param); //[2, 3, 4, 5]
}
        
myF(1,2,3,4,5);`
          }</Text>
        </View>
        <View style={styles.restParameters.restButtons} >
          <TouchableOpacity style={styles.restParameters.restButton} onPress={() => navigation.navigate('HookUseState')} >
            <Text>HookUseState</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restParameters.restButton} onPress={() => navigation.navigate('SpreadOperator')} >
            <Text>Spread Operator</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
```

![list](/Lab2/SCR/3.PNG "Start")

## SpreadOperator.js

``` JS
import * as React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import styles from '../static/styles';

export default function SpreadOperator({navigation}) {
    return (
      <View style = {styles.spreadOperator.spreadContainer}>
        <Text style = {styles.spreadOperator.spreadText}>Spread syntax to zapis, który umożliwia rozbijanie iterowanej wartości na składowe. Elementy do kórych może być użyć to string,tablice,kolekcje,obiekty i nawet sam obiekt.
        Kilka zastosowań:
        </Text>
        <View style = {styles.spreadOperator.spreadEx}>
          <Text style = {styles.spreadOperator.spreadTextEx}>{
`//rozbijanie tablicy na poszczególne liczby
const tab = [1, 2, 3];
console.log(...tab); //1, 2, 3

//kopiowanie tablicy
const tab2 = [...tab];

//łączenie tablic
const tabPart = [3, 4]
const tabFull = [1, 2, ...tabPart, 5]; //1, 2, 3, 4, 5

//rozdzielanie tekstu na poszczególne litery
const str = "Ala ma kota";
const tab = [...str]; //["A", "l", "a", " ", "m", "a", " ", "k", "o", "t", "a"]

//Można też stosować do Math.max która wymaga parametrów po przecinku
const tab = [1, 2, 3, 5, 4];
Math.max(...tab); //5`
          }</Text>
        </View>
        <View  style={styles.spreadOperator.spreadButtons}>
          <TouchableOpacity style={styles.spreadOperator.spreadButton} onPress={() => navigation.navigate('HookUseState')} >
            <Text>Hook Use State</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.spreadOperator.spreadButton} onPress={() => navigation.navigate('RestParameters')} >
            <Text>Rest Parameters</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
```

![list](/Lab2/SCR/4.PNG "Start")

