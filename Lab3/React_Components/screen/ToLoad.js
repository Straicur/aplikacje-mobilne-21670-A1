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

