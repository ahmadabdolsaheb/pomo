import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class StatScreen extends Component {
  static navigationOptions ={
    title: 'Stat',
    tabBarIcon: ({ tintColor }) => <Icon
              name="ios-stats"
              size={30}
              type="ionicon"
              color={tintColor}
    />
  }
  render() {
    return (
      <View>
        <Text>StatScreen</Text>
        <Text>StatScreen</Text>
        <Text>StatScreen</Text>
        <Text>StatScreen</Text>
        <Text>StatScreen</Text>
        <Text>StatScreen</Text>
        <Text>StatScreen</Text>
      </View>
    );
  }
}

export default StatScreen;
