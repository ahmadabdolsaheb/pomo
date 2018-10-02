import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon, List, Slider } from 'react-native-elements'

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
];
// implemented without image with header


class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
    tabBarIcon: ({ tintColor }) => <Icon
              name="md-settings"
              size={30}
              type="ionicon"
              color={tintColor}
    />
  }
  state = { value: 0 };
  render() {
    return (
      <View styles={styles.container}>


      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 60
  }
};

export default SettingsScreen;
