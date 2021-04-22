# React-Native-CLI 

# Działanie 


<br>
Aplikacja po włączeniu wyślwietla 6 przyciski z różnym działaniem:
<ul>
  <li>Home - Ekran główny</li>
  <li>Zarejestruj - Ekran z możliwością dodania użytkownika do bazy danych</li>
  <li>Edycja - Ekran z możliwością edycji użytkownika z bazy po podaniu jego id i wpisaniu danych do edycji</li>
  <li>Wyszukaj - Ekran z możliwością wyszukania użytkownika po id</li>
  <li>Wypisz wszystko - Ekran wypisujacy wszystkich użytkowników z bazy</li>
  <li>Usuń - Ekran umożliwiajacy usunięcie użytkonika po podaniu jego id</li>
</ul>  

# Komponenty

## Mybutton.js 

Customowy Button wykorzystywany w całej aplikacji

``` JS
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#EA8F0B',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    color: '#ffffff',
  },
});

export default Mybutton;
```

## Mytext.js 

Customowy Text wykorzystywany w całej aplikacji

``` JS

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Mytext = (props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
  },
});

export default Mytext;
```

## Mytextinput.js 

Customowy TextInput wykorzystywany w całej aplikacji

``` JS
import React from 'react';
import { View, TextInput } from 'react-native';

const Mytextinput = (props) => {
  return (
    <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#000000',
        borderWidth: 1,
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#000000"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};

export default Mytextinput;
```

# Ekrany

## App.js

Główny widok odpowiadający za nawigację po ekranach , Home ustawiony został na domyślny

``` JS
import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#EA8F0B', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewUser}
          options={{
            title: 'Wyświetl użytkownika', //Set Header Title
            headerStyle: {
              backgroundColor: '#EA8F0B', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllUser}
          options={{
            title: 'Wypisz wszystko', //Set Header Title
            headerStyle: {
              backgroundColor: '#EA8F0B', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: 'Edytuj użytkownika', //Set Header Title
            headerStyle: {
              backgroundColor: '#EA8F0B', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: 'Zarejestruj użytkownika', //Set Header Title
            headerStyle: {
              backgroundColor: '#EA8F0B', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: 'Usuń użytkownika', //Set Header Title
            headerStyle: {
              backgroundColor: '#EA8F0B', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
```

## HomeScreen.js

Jest to domyślny ekran z przyciskami przekierowywujacymi do odpowiedniego ekranu. Tworzona jest tutaj Baza danych oraz tworzone są tu odpowiednie kolumny do bazy

``` JS
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
```

Wygląd ekranu startowego

![list](/Lab7/SCR/1.PNG "Start")

## RegisterUser.js

Komponent ten odpowiada za dodanie użytkownika do bazy danych. Po podaniu danych do inputów wykonywany jest setState a po kliknięciu przycisku zostaje wykonywane zapytanie SQL pyrz pomocy funkcji strzałkowej i jeżeli dane były poprawne użytkownik zostaje dodany do bazy

``` JS

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const RegisterUser = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert('Wpisz Imie');
      return;
    }
    if (!userContact) {
      alert('Wpisz Numer');
      return;
    }
    if (!userAddress) {
      alert('Wpisz Adres');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukces',
              'Rejestracja powiodła się',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Rejestracja nie powiodła się');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Wpisz Imie"
                onChangeText={
                  (userName) => setUserName(userName)
                }
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Wpisz Numer"
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Wpisz Adres"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton title="Zatwierdź" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterUser;
```

Wpisanie danych 

![list](/Lab7/SCR/2.PNG "Start")

Po kliknięciu przycisku użytkownik zostaje dodany

![list](/Lab7/SCR/3.PNG "Start")

## UpdateUser.js

Ekran ten odpowiada za edycje użytkownika po podaniu jed id. Po podaniu Id i kliknięciu przycisku z bazy danych zostają pobrane dane odpowiedniego użytkownika i zostają wpisane do umieszczonych niżej inputów. Po zmianie danych i kliknięciu przycisku zostaje wywoływana funkcja strzałkowa która wywołuje zapytanie UPDATE do naszej bazy danych i edytuje dane odpowiedniego użytkownika

``` JS
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const UpdateUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };

  let searchUser = () => {
    console.log(inputUserId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.user_name,
              res.user_contact,
              res.user_address
            );
          } else {
            alert('Nie znalezionu użytkownika');
            updateAllStates('', '', '');
          }
        }
      );
    });
  };
  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);

    if (!inputUserId) {
      alert('Wpisz Id');
      return;
    }
    if (!userName) {
      alert('Wpisz imie');
      return;
    }
    if (!userContact) {
      alert('Wpisz numer');
      return;
    }
    if (!userAddress) {
      alert('Wpisz adres');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukces',
              'Użytkonik zmieniony',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Edycja nieudana');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Wpisz Id Użytkownika"
                style={{ padding: 10 }}
                onChangeText={
                  (inputUserId) => setInputUserId(inputUserId)
                }
              />
              <Mybutton
                title="Wyszukaj Użytkownika"
                customClick={searchUser} 
              />
              <Mytextinput
                placeholder="Wpisz Imie"
                value={userName}
                style={{ padding: 10 }}
                onChangeText={
                  (userName) => setUserName(userName)
                }
              />
              <Mytextinput
                placeholder="Wpisz numer"
                value={'' + userContact}
                onChangeText={
                  (userContact) => setUserContact(userContact)
                }
                maxLength={10}
                style={{ padding: 10 }}
                keyboardType="numeric"
              />
              <Mytextinput
                value={userAddress}
                placeholder="Wpisz adres"
                onChangeText={
                  (userAddress) => setUserAddress(userAddress)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton
                title="Edytuj użytkownika"
                customClick={updateUser}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;
```

Widok po wpisaniu odpowiedniego id , kliknięciu przycisku oraz wpisaniu zmienionych danych

![list](/Lab7/SCR/4.PNG "Start")

Widok po kliknięciu przycisku i udanej edycji użytkownika

![list](/Lab7/SCR/5.PNG "Start")

## ViewUser.js

Ekran ten umożliwia wyświetlenie użytkownika po podaniu jego id i kliknieciu przycisku. Po wpisaniu i kliknięciu przycisku zostaje wykonane zapytanie SQL Select które pobiera nam użytkownika o odpowiednim id i wyświetla go poniżej inputu 

``` JS
import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewUser = () => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('Nie znaleziono użytkownika');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Wpisz Id Użytkownika"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Wyszukaj Użytkownika" customClick={searchUser} />
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
            <Text>User Id: {userData.user_id}</Text>
            <Text>User Name: {userData.user_name}</Text>
            <Text>User Contact: {userData.user_contact}</Text>
            <Text>User Address: {userData.user_address}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewUser;
```

Widok po wpisaniu odpowiedniego id i kliknięciu przycisku

![list](/Lab7/SCR/6.PNG "Start")

## ViewAllUser.js

Ekran który wyświetla wszystkich użytkowników w naszej bazie danych z tabeli table_user. Najpierw pobierane są dane przy pomocy prostego selecta a następnie przypisywane są do naszego stanu przy pomocy UseState następnie renderowana jest lista która za parametr wejściowy bierze watość zmiennej z useState'a. Po czy renderowana jest już lista wszystkich pobranych elementów przy pomocy funkcji strzałkowej listItemView

``` JS
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const ViewAllUser = () => {
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  let listViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  };

  let listItemView = (item) => {
    return (
      <View
        key={item.user_id}
        style={{margin:'2%', backgroundColor: '#F4CE93', padding: 20 ,borderWidth: 1, borderColor:'black',borderRadius:10 }}>
        <Text>Id: {item.user_id}</Text>
        <Text>Imie: {item.user_name}</Text>
        <Text>Numer: {item.user_contact}</Text>
        <Text>Adres: {item.user_address}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#E6DDCF' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewAllUser;
```

Widok po wejściu w ekran i wyświetlenie wszystkich użytkowniów

![list](/Lab7/SCR/7.PNG "Start")

## DeleteUser.js

Ekran który umożliwia usuwanie użytkownika o podamym id z bazy. Po podaniu odpowiedniego Id i kliknięiu wykonywane jest proste zapytanie SQL Delete które usuwana podanego użytkownika z bazy

``` JS

import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const DeleteUser = ({ navigation }) => {
  let [inputUserId, setInputUserId] = useState('');

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sukces',
              'Użytkownik został usunięty',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Wpisz poprawne Id');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mytextinput
            placeholder="Wpisz Id Użytkownika"
            onChangeText={
              (inputUserId) => setInputUserId(inputUserId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Usuń użytkownika" customClick={deleteUser} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeleteUser;
```

Wpisanie id użytkownika którego chcemy usunąć

![list](/Lab7/SCR/8.PNG "Start")

Widok po kliknięciu przycisku i usunięciu odpowiedniego użytkownika

![list](/Lab7/SCR/9.PNG "Start")

I jeszcze na potwierdzenie próba wyszukania usuniętego użytkownika

![list](/Lab7/SCR/10.PNG "Start")
