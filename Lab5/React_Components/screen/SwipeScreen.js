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
