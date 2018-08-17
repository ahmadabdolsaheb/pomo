import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class FriendProfileScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>FriendProfileScreen</Text>
        <Text>FriendProfileScreen</Text>
        <Text>FriendProfileScreen</Text>
        <Text>FriendProfileScreen</Text>
        <Text>FriendProfileScreen</Text>
        <Text>FriendProfileScreen</Text>
        <Text>FriendProfileScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height

  }
});

export default FriendProfileScreen;
