import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
 } from 'react-native';
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
        <View style={styles.circle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
      width: 100,
      height: Dimensions.get('window').height * 0.3,
      borderRadius: 100 / 2,
      backgroundColor: 'red'
  }
});

export default PomodoroScreen;
