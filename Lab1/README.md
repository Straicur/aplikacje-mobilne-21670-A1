# Prosty kalkulator napisany w React-CLI
<br>

# Proste działania
<br>

## Dodawanie

![list](/Lab1/SCR/2.PNG "Start")
![list](/Lab1/SCR/3.PNG "Start")

<br>
## Mnożenie

![list](/Lab1/SCR/4.PNG "Start")
![list](/Lab1/SCR/5.PNG "Start")

<br>
## Dzielenie

![list](/Lab1/SCR/6.PNG "Start")
![list](/Lab1/SCR/7.PNG "Start")

<br>
## Modulo

![list](/Lab1/SCR/8.PNG "Start")
![list](/Lab1/SCR/9.PNG "Start")

<br>

```JS
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button, Platform,StyleSheet, Text, View } from 'react-native';
import InputNumberButton from './InputNumberButton';
const buttons = [
  ['CLEAR','DEL','%'],
  ['7','8','9','/'],
  ['4','5','6','x'],
  ['1','2','3','-'],
  ['0','.','=','+']
];
export default class App extends Component {
  constructor(){
    super();
    this.initialState = {
      displayValue: '0',
      operator: null,
      firstValue: '',
      secondValue: '',
      nextValue: false

    }
    this.state = this.initialState;
  }
  renderButton(){
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
          return <InputNumberButton 
                value={buttonItems}
                handleOnPress={this.handleInput.bind(this,buttonItems)}
                key={'btn-' + buttonIndex} />    
        });

      return <View style={styles.inputRow} key={'row-'+index}>{rowItem}</View>
    });
    return layouts
  }
  handleInput = (input) => {
    const { displayValue , operator , firstValue , secondValue , nextValue }=this.state;
    switch(input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          displayValue: (displayValue ==='0') ? input : displayValue + input
        })

        if(!nextValue){
          this.setState({
            firstValue: firstValue + input
          })

        }else{
          this.setState({
            secondValue: secondValue + input
          })
        }
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
      case '%':
        this.setState({
          nextValue: true,
          operator: input,
          displayValue: (operator !== null ? displayValue.substr(0, displayValue.length-1) : displayValue) + input,
          nextValue: true
        })
        break;
      
      case '=':
          let formatOperator = (operator =='x')?'*':operator 
          let result = eval(firstValue + formatOperator + secondValue)
          this.setState({
            displayValue: result % 1 === 0 ? result : result.toFixed(2),
            firstValue: result % 1 === 0 ? result : result.toFixed(2),
            secondValue: '',
            operator: null,
            nextValue: false,
          })
        break;
      case 'CLEAR': 
        this.setState(this.initialState);
        break;
      case 'DEL':
        let string = displayValue.toString();
        let deletedString = string.substr(0,string.length - 1);
        let length = string.length;
        this.setState({
            displayValue: length==1 ? '0' : deletedString,
            firstValue: length==1 ? '' : deletedString,
        });
        break;
      case '.':
      let dot = displayValue.toString().slice(-1)
      this.setState({
        displayValue: dot !=='.' ?  displayValue + input : displayValue
      })
      if(!nextValue){
        this.setState({
          firstValue: firstValue + input
        })

      }else{
        this.setState({
          secondValue: secondValue + input
        })
      }
        break;
    }
  }
  render() { 
    return (
      <View style={styles.container}>
          <View style={styles.resultContainer}>
              <Text style={styles.resultText}>
                  {this.state.displayValue}
              </Text>
          </View>
              
          <View style={styles.resultContainer}>
              {this.renderButton()}
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#230085'
  },
  resultContainer: {
    flex: 8,
    backgroundColor: '#19005e'
  },
  resultText: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign:'right',
  },
  inputRow: {
    flex: 1,
    flexDirection:'row'
  }
});

```

```JS
mport { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class InputNumberButton extends Component {
  render() { 
      const { value, handleOnPress } = this.props

    return (
          <TouchableOpacity 
              style = {styles.container} 
              onPress = {() => handleOnPress(value)} >
              <Text style={styles.text}>{value}</Text>
          </TouchableOpacity>
        );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 1,
      backgroundColor: `rgba(255,255,255,0.1)`,
      justifyContent: 'center',
      alignItems :'center',
    },
    text: {
        color:'white',
        fontSize: 26,
    }
  });
  
```
