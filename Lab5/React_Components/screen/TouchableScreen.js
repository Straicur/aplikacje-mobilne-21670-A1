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