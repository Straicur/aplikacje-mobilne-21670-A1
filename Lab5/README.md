# React-CLI z Expo

# Działanie 


Nawigacja w aplikacji prawię się nie zmieniła od poprzedniego labolatorium, natomiast stworzyłem 4 nowych ekranów na potrzebę labolatorium
<br>
Aplikacja po włączeniu wyślwietla 4 przyciski z różnym działaniem:
<ul>
  <li>First Scroll - Proste wykorzystanie ScrollView z wykorzystaniem FlexBoxa do pozycjonowania kontentu</li>
  <li>Second Scroll - Praktycznie identyczny co pierwszys Scroll , główna różnica to inne wykorzystanie FlexBoxa</li>
  <li>Swipe Screen - Proste wykorzystanie Swipeable</li>
  <li>Touchable Screen - Proste wykorzystanie TouchableOpacity i TouchableHighlight która zlicza ilość kliknięć poszczególnego przycisku</li>
</ul>  


# Style dla komponentów

<br>

  - ***styles.home*** zawiera style do ***Home.js*** </li>
  - ***styles.firstScreen*** zawiera style do ***FirstScroll.js*** </li>
  - ***styles.secondScreen*** zawiera style do ***SecondScroll.js*** </li>
  - ***styles.touchableScreen*** zawiera style do ***TouchableScreen.js*** </li>
  - ***styles.swipeScreen*** zawiera style do ***SwipeScreen.js*** </li>

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
    styles.firstScreen = StyleSheet.create({
        scrolView: {
            alignContent:'center',
            flexDirection: 'column',
            alignItems: 'baseline',
        },
        viewBox:{
            width: 300,
            height: 128,
        }
    });
    styles.secondScreen = StyleSheet.create({
        scrolView: {
            alignContent:'space-around',
            flexDirection: 'column',
        },
        viewBox:{
            alignSelf:'center',
            width: 100,
            height: 128,
        }
    });
    styles.touchableScreen = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 80,
            backgroundColor:'#ececec'
        },
        button:{
            borderRadius:20,
            backgroundColor:"#23238E",
            paddingHorizontal:'10%',
            paddingVertical:'5%',
            margin:'5%', 
        },
        firstContainer:{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor:"#ccffcc",
        },
        secondContainer:{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor:"#ffffcc",
        },
        textButton:{
            fontSize:20,
            color:'white',
            textAlign:'center'
        },
        text:{
            paddingTop:20,
            fontSize:30,
            textAlign:'center'
        }
    });
    styles.swipeScreen = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 80,
          },
          listItem: {
            height: 90,
            alignItems: 'center',
            justifyContent: 'center'
          },
          leftSwipeItem: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingRight: 20
          },
          text:{
              paddingTop:20,
              fontSize:30,
              textAlign:'center'
          }
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
import TextInput from './React_Components/screen/TextInput';
import PickerSelect from './React_Components/screen/PickerSelect';
import SwitchScr from './React_Components/screen/SwitchScr';
import ToastScr from './React_Components/screen/ToastScr';
import DatePicker from './React_Components/screen/DatePicker';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />      
        <Stack.Screen name="TextInput" component={TextInput} />
        <Stack.Screen name="PickerSelect" component={PickerSelect} />
        <Stack.Screen name="SwitchScr" component={SwitchScr} />
        <Stack.Screen name="ToastScr" component={ToastScr} />
        <Stack.Screen name="DatePicker" component={DatePicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```

## Home.js

Home jest to domyślny ekran z przyciskami przekierowywujacymi do odpowiedniego ekranu

![list](/Lab5/SCR/1.PNG "Start")

```js
import * as React from 'react';
import { View, Text, Button, TouchableOpacity ,ScrollView } from 'react-native';
import styles from '../static/styles';

export default function Home({navigation}) {
    return (
      <View style={styles.home.homeContainer}>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('TextInput')} >
          <Text style={styles.home.homeText}>Text Input</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('PickerSelect')} >
          <Text style={styles.home.homeText}>Picker Select</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('SwitchScr')} >
          <Text style={styles.home.homeText}>Switch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('ToastScr')} >
          <Text style={styles.home.homeText}>Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('DatePicker')} >
          <Text style={styles.home.homeText}>DatePicker</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
```

## FirstScroll.js

Komponent ten ukazuje wykorzystanie FlexBoxu oraz ScrollView. W ScrollView zostało umieszczone 10 View w różnych kolorach i o wymiarach 300 x 128 px

```js
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
```

Po kliknieciu w przycisk

![list](/Lab5/SCR/2.PNG "Start")

Po przesunięciu w dół

![list](/Lab5/SCR/3.PNG "Start")

## SecondScroll.js 

Komponent ten óżni się od poprzedniego tym że wykorzystane zostały inne ustawienia FlexBoxu oraz wymiary to 100 x 128 px

```js
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
```

Po kliknieciu w przycisk

![list](/Lab5/SCR/4.PNG "Start")

Po przesunięciu w dół

![list](/Lab5/SCR/5.PNG "Start")

## SwipeScreen.js

Komponent ten ukazuje proste zastosowanie Swepable. Ten widok po przesunięciu w prawo ukazuje następny widok który po przesunięciu odpowiedniego dystansu zmienia kolor i text. Po przesunięciu maksymalnie w prawo i puszczeniu widok zmienia kolor

```js
import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Swipeable from 'react-native-swipeable';
import styles from '../static/styles';

class Swipe extends Component {

  state = {
    leftAction: false,
    toggle: false
  };

  render() {
    const {leftAction, toggle} = this.state;

    return (
      <Swipeable
        leftActionActivationDistance={200}
        leftContent={(
          <View style={[styles.swipeScreen.leftSwipeItem, {backgroundColor: leftAction ? '#dd0000' : '#ff9b57'}]}>
            {leftAction ?
              <Text>Puść!</Text> :
              <Text>Przeciągaj dalej!</Text>}
          </View>
        )}
        onLeftActionActivate={() => this.setState({leftAction: true})}
        onLeftActionDeactivate={() => this.setState({leftAction: false})}
        onLeftActionComplete={() => this.setState({toggle: !toggle})}
      >
        <View style={[styles.swipeScreen.listItem, {backgroundColor: toggle ? '#e0e040' : '#40b000'}]}>
          <Text>Swipe</Text>
        </View>
      </Swipeable>
    );
  }
}

export default class  SwipeScreen extends Component{
  
  state = {
    currentSwipeable: null
  };

  handleScroll = () => {
    const {currentSwipeable} = this.state;

    if (currentSwipeable) {
      currentSwipeable.recenter();
    }
  };

  render() {
    const {currentSwipeable} = this.state;
    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentSwipeable && currentSwipeable !== swipeable) {
          currentSwipeable.recenter();
        }

        this.setState({currentSwipeable: swipeable});
      },
      onClose: () => this.setState({currentSwipeable: null})
    };

    return (
      <ScrollView>
        <Text style={styles.swipeScreen.text}>Prosty przykład Swipeable</Text>
        <ScrollView onScroll={this.handleScroll} style={styles.swipeScreen.container}>
          <Swipe {...itemProps}/>
        </ScrollView>
      </ScrollView>
    );
  }
}

```
Startowy widok

![list](/Lab5/SCR/6.PNG "Start")

Różne stopnie przesuniecia po zaczęciu przesuwania

![list](/Lab5/SCR/7.PNG "Start")

Po przekroczeniu odpowiedniego dystansu zmiana koloru i textu

![list](/Lab5/SCR/8.PNG "Start")

Po puszczeniu widoku zmiana koloru

![list](/Lab5/SCR/9.PNG "Start")

## TouchableScreen

Widok ten prównuje dwa prawie identyczne komponenty i pokazuje ich działanie poprzez zliczanie ilości kliknieć. Można zauważyć różnice w działaniu tych komponentów po dłuższym przytrzymaniu klikniecia

```js
import React, {Component } from 'react';
import { ScrollView, Text, View,TouchableOpacity, TouchableHighlight, Button, TextInput, Modal  } from 'react-native';
import styles from '../static/styles';

export default class TouchableScreen extends Component {
        constructor(props) {
          super(props);
          this.state = { 
              countTouchableOpacity : 0,
              countTouchableHighlight : 0,
          };
      }

      onPressTouchableOpacity = () => {
          this.setState({
              countTouchableOpacity: this.state.countTouchableOpacity + 1
          });
      };
      onPressTouchableHighlight = () => {
          this.setState({
              countTouchableHighlight: this.state.countTouchableHighlight + 1
          });
      };

      render(){ 
          return (
              <View style={[styles.touchableScreen.container]}>
                  <ScrollView >
                      <View style={[styles.touchableScreen.firstContainer]}>
                          <View >
                              <View >
                                  <TouchableOpacity
                                      style={[styles.touchableScreen.button]}
                                      onPress={this.onPressTouchableOpacity}
                                  >
                                      <Text style={[styles.touchableScreen.textButton]}>TouchableOpacity</Text>
                                  </TouchableOpacity>
                              </View>
                              <View >
                                  <Text style={[styles.touchableScreen.text]} >{`Licznik kliknięć`}: </Text><Text style={[styles.touchableScreen.text]}> {this.state.countTouchableOpacity}</Text>
                              </View>
                          </View>
                      </View>
                      <View style={[styles.touchableScreen.secondContainer]}>
                          <View >
                              <View >
                                  <TouchableHighlight
                                      style={[styles.touchableScreen.button]}
                                      onPress={this.onPressTouchableHighlight}
                                  >
                                      <Text style={[styles.touchableScreen.textButton]}>TouchableHighlight</Text>
                                  </TouchableHighlight>
                              </View>
                              <View >
                                  <Text style={[styles.touchableScreen.text]}>{`Licznik kliknięć`}: </Text><Text style={[styles.touchableScreen.text]}> {this.state.countTouchableHighlight}</Text>
                              </View>
                          </View>
                      </View>
                  </ScrollView>
              </View>
          )
      };
  }
  
```

Widok po wejśiu 

![list](/Lab5/SCR/10.PNG "Start")

Po kliknięciu TouchableOpacity

![list](/Lab5/SCR/11.PNG "Start")

Po kliknięciu TouchableHighlight. Po dłuższym przytrzymaniu kliknięcia licznik się nie iteruje

![list](/Lab5/SCR/12.PNG "Start")


