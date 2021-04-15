import React ,{Component}  from 'react';
import { View, Text, Button, TouchableOpacity,ScrollView ,StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import styles from '../static/styles';

export default class ConnectionScreen extends Component {
  NetInfoSubscribtion = null;

  constructor(props) {
    super(props);
    this.state = {
      connection_status: false,
      connection_type: null,
      connection_net_reachable: false,
      connection_wifi_enabled: false,
      connection_details: null,
    }
  }

  componentDidMount() {

    this.NetInfoSubscribtion = NetInfo.addEventListener(
      this._handleConnectivityChange,
    );

  }

  componentWillUnmount() {
    this.NetInfoSubscribtion && this.NetInfoSubscribtion();
  }

  _handleConnectivityChange = (state) => {
    this.setState({
      connection_status: state.isConnected,
      connection_type: state.type,
      connection_net_reachable: state.isInternetReachable,
      connection_wifi_enabled: state.isWifiEnabled,
      connection_details: state.details,
    })
  }
    render(){
        return (
          <View style={styles.connectionScrreen.body}>
        <Text style={styles.connectionScrreen.title}>
            Inforrmacje o połączeniu :{'\n'}
        </Text>
        <Text style={styles.connectionScrreen.detail}>
          Connection Status : {this.state.connection_status ? 'Connected' : 'Disconnected'}
        </Text>
        
        <Text style={styles.connectionScrreen.detail}>
          Connection Type : {this.state.connection_type}
        </Text>
        <Text style={styles.connectionScrreen.detail}>
          Internet Reachable : {this.state.connection_net_reachable ? 'YES' : 'NO'}
        </Text>
        <Text style={styles.connectionScrreen.detail}>
          Wifi Enabled : {this.state.connection_wifi_enabled ? 'YES' : 'NO'} {'\n'}
        </Text>
        <Text style={styles.connectionScrreen.title}>
          Connection Details : {'\n'}
        </Text>
          <Text style={styles.connectionScrreen.detail}>
          {this.state.connection_type == 'wifi' ?
            (this.state.connection_details.isConnectionExpensive ? 'Connection Expensive: YES' : 'Connection Expensive: NO')
              + '\n'
              + 'ssid: ' + this.state.connection_details.ssid
              + '\n'
              + 'bssid: ' + this.state.connection_details.bssid
              + '\n'
              + 'strength: ' + this.state.connection_details.strength
              + '\n'
              + 'ipAddress: ' + this.state.connection_details.ipAddress
              + '\n'
              + 'subnet: ' + this.state.connection_details.subnet
              + '\n'
              + 'frequency: ' + this.state.connection_details.frequency
            :
            this.state.connection_type == 'cellular' ?
              (this.state.connection_details.isConnectionExpensive ? 'Connection Expensive: YES' : 'Connection Expensive: NO')
                + '\n'
                + 'cellularGeneration: ' + this.state.connection_details.cellularGeneration
                +'\n'
                +'carrier: '+this.state.connection_details.carrier
              :
              '---'
          }
          </Text>
      </View>
          
        );
      }
  }

  
