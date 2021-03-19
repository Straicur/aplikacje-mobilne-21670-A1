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