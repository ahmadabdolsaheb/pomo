import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

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
  render() {
    return (
      <View>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}

export default SettingsScreen;
