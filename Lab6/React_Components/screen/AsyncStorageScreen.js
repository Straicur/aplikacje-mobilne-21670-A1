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