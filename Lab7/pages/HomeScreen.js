import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1  ,height:'100%' }}>
      <View style={{ flex: 1,  backgroundColor: 'white',height:'100%' }}>
        <View style={{ flex: 1 ,height:'100%'}}>
          <Text style={{textAlign:'center',color:"black",fontSize:30 }}>SQLite Przykład</Text>
          <Mybutton
            title="Zarejestruj"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="Edycja"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="Wyszukaj"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="Wypisz wszystko"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Usuń"
            customClick={() => navigation.navigate('Delete')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;