
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { TabNavigator } from "react-navigation";
import Home from "./Home.js";

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Password',
    icon: 'av-timer',
  },
  {
    title: 'Updates',
    icon: 'flight-takeoff',
  },
];
class Main extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ focused, tintcolor }) => (
      <Image
        source={focused ? require('../assets/images/Main(1).png') : require('../assets/images/Main.png')}
        style={{ width: 26, height: 26, tintColor: tintcolor }}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Avatar
              onPress={() => console.log("Works!")}
              containerStyle={styles.avatar}
              large
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
            <Text style={styles.text}>Oiar</Text>
            <Text style={styles.subtitle}>轻轻地我走了，正如我轻轻地来</Text>
          </View>
        </View>
        {
          list.map((item, i) => (
            <ListItem
              divider={{ tintColor: '#fff' }}
              key={i.toString()}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    // marginTop: 10,
    // marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    // marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    // textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 12,
    color: '#8a8a8a',
  },
});

const BottomNavigation = TabNavigator(
  {
    首页: { screen: Home },
    我的: { screen: Main },
  },
  {
    tabBarOptions: {
      activeTintColor: '#f40bf0',
      inactiveTintColor: '#000',
      showIcon: true,
      upperCaseLabel: false,
      pressColor: '#823453',
      pressOpacity: 0.8,
      style: {
        // backgroundColor: '#F5FCFF',
        paddingBottom: 3,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
      },
      indicatorStyle: { height: 0 },
    },
    tabBarPosition: 'bottom',
  },
);

export default BottomNavigation;
