import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Home extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ focused, tintcolor }) => (
      <Image
        source={focused ? require('../assets/images/Home(1).png') : require('../assets/images/Home.png')}
        style={{ width: 28, height: 28, tintColor: tintcolor }}
      />
    ),
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>首页!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // backgroundColor: '#F5FCFF',
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
