# React-CLI z Expo
<br>

# Działanie 


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
    styles.PickerSelect = StyleSheet.create({
        pickerContainer: {
            alignItems: "center",
            padding: 6,
            height: 340,
            marginTop:10,
            marginLeft:30,
        },
        selectContainer:{
            width: 300,
            padding: 20,
        },
        selectionContainer: {
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10,
            marginTop: 10,
            marginRight: 10,
        },
        container:{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "ghostwhite",
            backgroundColor: '#FFF',
            
        },
        selection: {
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold"
        },
        pickerLabel: {
            fontSize: 20,
            fontWeight: "bold"
        },
    });
    styles.Toast = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#FFF',
            padding:2,
        },
        modalContainer: {
            padding:10,
            paddingTop:10
        },
        modalText:{
            padding:3,
            paddingBottom:10,
            fontSize:40,
            textAlign:'center'
        },
        text:{
            fontSize:15,
            padding:1,
        },

    });
    styles.SwitchScr = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#FFF',  
          },
        modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          },
          button: {
            borderRadius: 20,
            padding: 15,
            elevation: 2,
            backgroundColor: "#2196F3",
          },
            
          textStyle: {
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 25,
          },
          modalText: {
            marginBottom: 15,
            textAlign: "center",
            fontSize: 80,
          }
    });
    styles.TextInput = StyleSheet.create({
        homeContainer: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#FFF',
        },
        title: {
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:10
        },
        titleText: {
            color:'#000',
            fontSize:30,
        },
        text: {
            fontWeight:'bold',
            fontSize:15,
        },
        input: {
            backgroundColor: '#ddd',
            marginVertical:'2%',
            padding:'3%',
        }
    });
    styles.DatePicker = StyleSheet.create({
        homeContainer: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#A8A8A8',
            textAlignVertical : "center",
            paddingTop:100,
            paddingBottom:100
        },
        textContainer: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#fff',
            textAlignVertical : "center",
            borderRadius:30,
            paddingTop:100,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 10,
        },
        text:{
            color:'black', 
            fontSize: 20,
            marginBottom: 100,
            marginLeft:100,
            alignItems: 'center',
            justifyContent: 'center',
            
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

![list](/Lab4/SCR/0.PNG "Start")

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

## TextInput.js

```js
import React ,{Component}  from 'react';
import { View, Text, Button, TouchableOpacity ,TextInput ,ScrollView} from 'react-native';
import styles from '../static/styles';
export default class FilterSort extends Component {
    render(){
        return (
          <View style={styles.TextInput.homeContainer}>
            <View style={styles.TextInput.title}>
                <Text style={styles.TextInput.titleText}>TextInput</Text>
            </View>
            <ScrollView >
                    <View>
                        <Text style={styles.TextInput.text}>Default TextInput</Text>
                        <TextInput style={styles.TextInput.input} /><Text/>
                    </View>
                    <View>
                        <Text style={styles.TextInput.text} >TextInput z placeholder'em</Text>
                        <TextInput style={styles.TextInput.input} placeholder="Placeholder" /><Text/>
                    </View>
                    <View>
                        <Text style={styles.TextInput.text}>TextInput z ustawioną wartością której nie można zmienić</Text>
                        <TextInput style={styles.TextInput.input} value="Ustawiona wartość" /><Text/>
                    </View>
                    <View>
                        <Text style={styles.TextInput.text}>TextInput z wartością domyślną i autoCorrect</Text>
                        <TextInput style={styles.TextInput.input} defaultValue="Domyślna wartość" autoCorrect={true}/><Text/>
                    </View>
                    <View>
                        <Text style={styles.TextInput.text}>TextInput z limitem długośći (50) i multiline</Text>
                        <TextInput style={styles.TextInput.input} maxLength={50} multiline={true} /><Text/>
                    </View>
                    <View>
                        <Text style={styles.TextInput.text}>TextInput z klawiaturą numeryczną z secureTextEntry</Text>
                        <TextInput style={styles.TextInput.input} keyboardType="numeric" secureTextEntry/><Text/>
                    </View>
                    <View>
                        <Text style={styles.TextInput.text}>TextInput zablokowany z domyślną wartością</Text>
                        <TextInput style={styles.TextInput.input} editable={false} defaultValue="Zablokowany"/><Text/>
                    </View>
                    <View>
                        <Text style={styles.TextInput.text}>TextInput z metodą która wyświetla alert po zmianie</Text>
                        <TextInput style={styles.TextInput.input} onChange={event =>{alert(event.nativeEvent.text)}}/><Text/>
                    </View>
            </ScrollView>
          </View>
          
        );
      }
  }
```

![list](/Lab4/SCR/1.PNG "Start")

![list](/Lab4/SCR/2.PNG "Start")

![list](/Lab4/SCR/3.PNG "Start")

## Select.js

```js
import React from "react";
import PropTypes from "prop-types";
import { View, Picker, Text } from "react-native";
import styles from '../static/styles';
export default function Select(props) {
 return (
    <View>
        <Text style={styles.PickerSelect.pickerLabel}>{props.label}</Text>
        <Picker {...props}>
            {props.items.map(i => (
                <Picker.Item key={i.label} {...i} />
        ))}
        </Picker>
    </View>
    );
}
Select.propTypes = {
    items: PropTypes.array,
    label: PropTypes.string
};

```

## SwitchScr.js

```js
import React ,{Component}  from 'react';
import { View, Text, Switch,Modal,StyleSheet ,Pressable } from 'react-native';
import styles from '../static/styles';


export default class SwitchScr extends Component {state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.SwitchScr.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.SwitchScr.centeredView}>
            <View style={styles.SwitchScr.modalView}>
              <Text style={styles.SwitchScr.modalText}>{Math.floor(Math.random()*100)}</Text>
              <Pressable
                style={styles.SwitchScr.button}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.SwitchScr.textStyle}>Schowaj</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={styles.SwitchScr.textStyle}>Pokaż pseudolosową liczbę z przedziału 0-100</Text>
        <Switch value={modalVisible} onValueChange={() => this.setModalVisible(true)}/>
      </View>
    );
  }
}


```
![list](/Lab4/SCR/6.PNG "Start")

![list](/Lab4/SCR/7.PNG "Start")

## PickerSelect.js

```js
import React ,{Component,useState}  from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../static/styles';
import Select from "./Select";

export default function PickerSelect() {
    const [podzespoly, setPodzespoly] = useState([
        { label: "", value: "" },
        { label: "Procesory", value: "Procesory" },
        { label: "Karty Graficzne", value: "Karty Graficzne" },
        { label: "Płyty główne", value: "Płyty główne" },
        { label: "Chłodzenia", value: "Chłodzenia" }
        ]);
    const [dostepne, setDostepne] = useState([
        { label: "", value: null, podzespoly: ["Procesory", "Karty Graficzne", "Płyty główne", "Chłodzenia"] },
        { label: "1", value: 1, podzespoly: ["Procesory"] },
        { label: "3", value: 2, podzespoly: ["Procesory", "Chłodzenia"] },
        { label: "GT 1030", value: 3, podzespoly: ["Karty Graficzne"] },
        { label: "2", value: 4, podzespoly: ["Chłodzenia"] },
        { label: "2", value: 4, podzespoly: ["Płyty główne"] }
        ]);
    const [availableDostepne, setAvailableDostepne] = useState([]);
    const [selectedPodzespol, setSelectedPodzespol] = useState(null);
    const [selectedDostepny, setSelectedDostepny] = useState(null);
    const [selection, setSelection] = useState("");
    return (
        <View style={styles.PickerSelect.container}>
            <View style={styles.PickerSelect.pickerContainer}>
                <View style={styles.PickerSelect.selectContainer}>
                    <Select
                        label="Podzespoły"
                        items={podzespoly}
                        selectedValue={selectedPodzespol}
                        onValueChange={podzespol => {
                            setSelectedPodzespol(podzespol);
                            setSelectedDostepny(null);
                            setAvailableDostepne(dostepne.filter(i =>
                                i.podzespoly.includes(podzespol)));
                        }}
                    />
                </View>
                <View style={styles.PickerSelect.selectContainer}>
                    <Select
                        label="Ilość"
                        items={availableDostepne}
                        selectedValue={selectedDostepny}
                        onValueChange={dostepny => {
                            setSelectedDostepny(dostepny);
                            setSelection(
                                ` Dostępne ${dostepne.find(i => i.value === 
                                    dostepny).label}`
                        );
                    }}
                    />
                </View>
            </View>
            <View style={styles.PickerSelect.selectionContainer}>
                <Text style={styles.PickerSelect.selection}>{selection}</Text>
            </View>
        </View>
        );
   }
```

![list](/Lab4/SCR/4.PNG "Start")

![list](/Lab4/SCR/5.PNG "Start")

## ToastScr.js

```js
import React ,{Component , useEffect, useState}  from 'react';
import { View, Text, ScrollView,Button, Modal,ToastAndroid} from 'react-native';
import styles from '../static/styles';

const Toast = ({ visible}) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      "Toast",
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50
    );
  }
  return null;
};

const ToastButton = () => {
  const [visible, setvisible] = React.useState(false);
  const [switchOn, setswitchOn] = React.useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => setvisible(false), [visible]);

  const handleButtonPress = () => {
    setvisible(true);
  };

  const onToggleSwitch = () => {
    setswitchOn(!switchOn);
  };


  var promise = null
  const createPromise = () => {
      let time = Math.floor(Math.random()*10000)
      setTime(time)
      promise = new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve('ukryj');
          }, time);
      });
  }

  return (
      <View style={styles.Toast.modalContainer}>
          <Toast visible={visible} />
          <Button title="Toast i Modal" onPress={() => {
              onToggleSwitch()
              handleButtonPress()
              createPromise()
              promise.then((value) => {
                  if(value == 'ukryj'){
                      setswitchOn(false)
                  }
              });
          }}/>
          <Modal
              animationType="fade"
              transparent={false}
              visible={switchOn}
              onRequestClose={() => {
                  setModalVisible(!switchOn);
              }}
          >
              <View >
                  <View >
                      <Text onPress={onToggleSwitch} style={styles.Toast.modalText}>Modal wyłączy się za:</Text>
                      <Text style={styles.Toast.modalText}>{time/1000} s</Text>
                  </View>
              </View>
          </Modal> 
      </View>
  );
};


export default class ToastScr extends Component {
    render(){
        return (
          <View style={styles.Toast.container}>
            <ScrollView >
                <ToastButton/><Text/>
                <Text style={[styles.Toast.text,{fontWeight: "bold",}]}>Po kliknieciu w przycisk pojawi się ToastAndroid oraz Modal. </Text>
                <Text style={styles.Toast.text}>W modalu zostanie wyświetlony czas w sekundach po którym zostanie on zamknięty.</Text>
                <Text style={styles.Toast.text}>Modal zostanie zamkniety po otrzymianiu z Promise wartości 'ukryj'</Text>
            </ScrollView>
          </View>
          
        );
      }
  }
```

![list](/Lab4/SCR/8.PNG "Start")

![list](/Lab4/SCR/9.PNG "Start")

## DatePicker.js

```js
import React ,{Component}  from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../static/styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
export default class TextInput extends Component {
    constructor(){
        super()
        this.state={
            isVisible: false,
            chosenDate: '',
        }
    }
    handlePicker = (datetime)=>{
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
        })
    }
    hidePicker = (datetime)=>{
        this.setState({
            isVisible: false
            
        })
    }
    showDatePicker = () => {
        this.setState({
            isVisible: true
        })
    }
    render(){
        return (
          <View style = {styles.DatePicker.homeContainer}>
              <View style = {styles.DatePicker.textContainer}>
                <Text style = {styles.DatePicker.text}>
                    {this.state.chosenDate}
                </Text>
              </View>
              <View style = {styles.DatePicker.homeContainer}>
                <Button style = {styles.DatePicker.button} title="Wybierz datę i godzinę" onPress={this.showDatePicker} />
                <DateTimePickerModal
                    isVisible={this.state.isVisible}
                    mode={"datetime"}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    is24Hour={false}
                />
            </View>
          </View>
          
        );
      }
  }
```

![list](/Lab4/SCR/10.PNG "Start")

![list](/Lab4/SCR/11.PNG "Start")

![list](/Lab4/SCR/13.PNG "Start")

![list](/Lab4/SCR/14.PNG "Start")
