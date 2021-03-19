# React-CLI z Expo
<br>

## Narzędzia 

Nawigacja w aplikacji prawię się nie zmieniła od poprzedniego labolatorium, natomiast stworzyłem 5 nowych scen na potrzebę labolatorium
<br>
Aplikacja po włączeniu wyślwietla 3 przyciski z różnym działaniem:
<ul>
  <li>Filter Sort - Przekierowuje do komponentu który ma w sobie 100 pseudolosowych liczb wyświetlanych przy pomocy map() i umożliwia ich posortowanie</li>
  <li>Lazy Loading - Przekierowuje do komponentu który demonstruje działanie React.lazy() i ukazuje ładowanie się string o długości 100 000 wygenerowanego przez odpowiedni komponent</li>
  <li>First Step Progress - Przekierowuje do komponentu który ukazuje działanie progresu krokowego złożonego z 3 kroków z różnymi wyglądami ActivityIndicator </li>
</ul>  


# Style dla komponentów

<br>

  - ***styles.home*** zawiera style do ***App.js*** </li>
  - ***styles.filterSort*** zawiera style do ***FilterSort.js*** </li>
  - ***styles.lazyLoading*** zawiera style do ***LazyLoading.js*** </li>
  
<br>

## styles.js

```css
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

    styles.filterSort = StyleSheet.create({
        filterSortContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        filterSortText: {
            color:'#000',
            fontSize:17,
        },
        filterSortTextEx: {
            color:'#bbb',
            fontSize:14,
        },
        filterSortEx: {
            flex: 1,
            backgroundColor: '#a1a1a1',
            justifyContent: 'center',
            textAlign:'center',
            padding:2,
            margin:1,
            borderRadius: 8,
            fontSize: 10,
           
        },
        filterSortButtons: {
            flexDirection: 'row',
        },
        filterSortButton: {
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
    styles.lazyLoading = StyleSheet.create({
        lazyContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            marginVertical:128,
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        lazyText: {
            color:'#000',
            fontSize:17,
        },
        lazyTextEx: {
            color:'#fff',
            fontSize:16,
        },
        lazyEx: {
            flex: 1,
            backgroundColor: '#949494',
            justifyContent: 'center',
            marginHorizontal: 16,
            marginVertical: 32,
            paddingHorizontal:16,
            paddingVertical:16,
            borderRadius:8,
            fontSize:24,
        }
    });
    

  

export default styles
```

# Komponenty

![list](/Lab3/SCR/9.PNG "Start")

## App.js

Główny widok odpowiadający za nawigację po ekranach , Home ustawiony został na domyślny

```js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './React_Components/screen/Home';
import FilterSort from './React_Components/screen/FilterSort';
import FirstStepProgress from './React_Components/screen/FirstStepProgress';
import LazyLoading from './React_Components/screen/LazyLoading';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />      
        <Stack.Screen name="FilterSort" component={FilterSort} />
        <Stack.Screen name="LazyLoading" component={LazyLoading} />
        <Stack.Screen name="FirstStepProgress" component={FirstStepProgress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

```

## Home.js

Home jest to domyślny ekran z przyciskami przekierowywujacymi do odpowiedniego ekranu



```js
import * as React from 'react';
import { View, Text, Button, TouchableOpacity ,ScrollView } from 'react-native';
import styles from '../static/styles';

export default function Home({navigation}) {
    return (
      <View style={styles.home.homeContainer}>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('FilterSort')} >
          <Text style={styles.home.homeText}>Filter Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton}  onPress={() => navigation.navigate('LazyLoading')} >
          <Text style={styles.home.homeText}>Lazy Loading </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.homeButton} onPress={() => navigation.navigate('FirstStepProgress')} >
          <Text style={styles.home.homeText}>First Step Progress</Text>
        </TouchableOpacity>
      </View>
    );
  }
```

## FilterSort.js

Jest to komponent z setką pseudo wygenerowanych libcz z możliwością posortowania ich

```js
import React ,{Component}  from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../static/styles';
const Lista = ({ tablica }) => {
  var i = 0
      return (
          <ScrollView >
           {tablica.map(liczba => <Text style = {styles.filterSort.filterSortEx} key={i++} >{liczba}</Text>)}
          </ScrollView>
      );
};

export default class FilterSort extends Component {
  constructor() {
    super();
    const tab = []; 

    for (let i = 0; i < 100; i++) {
      tab.push(Math.floor(Math.random() * 1000)+1);
    }

    this.state = { tab };
}

  sortowanie = () =>{
      this.state.tab.sort((a,b) => a > b ? 1:-1)
      this.forceUpdate()
  }
  render(){
      return (
        <View style = {styles.filterSort.filterSortContainer}>
          <Text style = {styles.filterSort.filterSortText}>Lista 100 pseudolosowych liczb z przedziału 0 - 1000</Text>
          <View style={styles.filterSort.filterSortButtons}>
            <TouchableOpacity style={styles.filterSort.filterSortButton} onPress={this.sortowanie}>
              <Text >Sortuj</Text>
            </TouchableOpacity>
          </View>
          <View  style = {styles.filterSort.filterSortContainer} >
            <Lista  tablica={this.state.tab} />
          </View>
        </View>
        
      );
    }
}
```

Widok początkowy

![list](/Lab3/SCR/1.PNG "Start")

Widok po sortowaniu

![list](/Lab3/SCR/2.PNG "Start")

## ToLoad.js

Komponent odpowiadający za generowanie randomowego tekstu o podanej długości z puli znaków pod zmienna characters

```js
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ComponentToLoad extends Component {
    constructor(props){
        super(props)

        const length = props.length ? props.length : 0
        
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let load = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            load += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        this.state = { text: load }
    }
    render(){ 
        return (
            <ScrollView>
                <Text>{this.state.text}</Text>
            </ScrollView>
        )
    };
}


```

## LazyLoading.js

Po zaimportowaniu Suspense wykorzystujemy metodę lazy() do zaimportowania wcześniej stworzonego komponentu ToLoad który będziemy wykorzystywać do lazy loading

```js
import React ,{Component ,Suspense}  from 'react';
import { View, Text} from 'react-native';
import styles from '../static/styles';

const Lazy = React.lazy(() => import('./ToLoad'))

export default class LazyLoading extends Component {
    render(){ 
        return (
            <View style = {styles.lazyLoading.lazyContainer}>
            <Text style = {styles.lazyLoading.lazyText}>Lazy Loading</Text>
            <View style = {styles.lazyLoading.lazyEx}>
                <Suspense fallback={<Text>Loading...</Text>}>
                    <Lazy length="100000"/>
                </Suspense>
            </View>
          </View>
        );
    }
}
```

Widok ładującego się komponentu

![list](/Lab3/SCR/3.PNG "Start")

Widok po załadowaniu

![list](/Lab3/SCR/4.PNG "Start")

## FirstStepProgress.js

Komponent w którym został zrealizowany progres krokowy 

```js
import React ,{Component}  from 'react';
import { ActivityIndicator,StyleSheet,View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default class FirstStepProgress extends Component {
    
    defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
          flex: 1,
          justifyContent: 'center'
        }
    };

    onStepComplete = () => {
        alert('Koniec :)');
    };
    render(){ 
        const progressStepsStyle = {
            activeStepIconBorderColor: '#686868',
            activeLabelColor: '#686868',
            activeStepNumColor: 'white',
            activeStepIconColor: '#686868',
            completedStepIconColor: '#686868',
            completedProgressBarColor: '#686868',
            completedCheckColor: '#4bb543'
          };
      
          const buttonTextStyle = {
            color: '#686868',
            fontWeight: 'bold'
          };
        return (
            <View style={{flex: 1, marginTop: 50 }}>
                <ProgressSteps {...progressStepsStyle}>
                    <ProgressStep 
                    label="First Step"
                    scrollViewProps={this.defaultScrollViewProps}
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Step 1!</Text>
                            <View style={[styles.container, styles.horizontal]}>
                                
                                <ActivityIndicator size="large" color="#03fcf0" />
                            </View>
                            
                        </View>
                    </ProgressStep>
                    <ProgressStep 
                    label="Second Step"
                    scrollViewProps={this.defaultScrollViewProps}
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Step 2 !</Text>
                            <View style={[styles.container, styles.horizontal]}>
                                
                                <ActivityIndicator size="large" color="#fc0331" />
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep 
                    label="Third Step"
                    FinishBtnText={'Zakończ'}
                    onSubmit={this.onStepComplete}
                    scrollViewProps={this.defaultScrollViewProps}
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Step 3 !</Text>
                            <View style={[styles.container, styles.horizontal]}>
                                
                                <ActivityIndicator size="small" color="#fc0331" />
                            </View> 
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 20,
      margin: 30
    }
});
  
```

Krok 1

![list](/Lab3/SCR/5.PNG "Start")

Krok 2

![list](/Lab3/SCR/6.PNG "Start")

Krok 3

![list](/Lab3/SCR/7.PNG "Start")

Po kliknieciu w submit

![list](/Lab3/SCR/8.PNG "Start")


