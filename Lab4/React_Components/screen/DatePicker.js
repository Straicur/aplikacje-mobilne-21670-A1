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