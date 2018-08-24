import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class PomodoroScreen extends Component {
  static navigationOptions ={
    title: 'Pomo',
    tabBarIcon: ({ tintColor }) => <Icon
              name="time-slot"
              size={30}
              type="entypo"
              color={tintColor}
    />
  }
  render() {
    return (
      <View>
        <Text>PomodoroScreen</Text>
        <Text>PomodoroScreen</Text>
        <Text>PomodoroScreen</Text>
        <Text>PomodoroScreen</Text>
        <Text>PomodoroScreen</Text>
        <Text>PomodoroScreen</Text>
        <Text>PomodoroScreen</Text>
      </View>
    );
  }
}

export default PomodoroScreen;
