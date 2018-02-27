import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { google, facebook, twitter, tumblr } from 'react-native-simple-auth'



export default class App extends Component<Props> {
  _social(){
    facebook({
      appId: '243123989464644',
      callback: 'fb243123989464644://authorize',
      scope: 'user_friends', // you can override the default scope here
      fields: ['email', 'first_name', 'last_name']
    }).then((info) => {
      alert(info.toString())
    }).catch((error) => {
      alert(error.toString())
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>Oi</Text>
          <TouchableOpacity onPress={() => this._social()}>
            <Text>Logar</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
