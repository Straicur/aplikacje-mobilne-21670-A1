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