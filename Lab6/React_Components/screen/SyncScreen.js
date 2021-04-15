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