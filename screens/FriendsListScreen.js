import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class FriendsListScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Text>FriendsListScreen</Text>
        <Text>FriendsListScreen</Text>
        <Text>FriendsListScreen</Text>
        <Text>FriendsListScreen</Text>
        <Text>FriendsListScreen</Text>
        <Text>FriendsListScreen</Text>
        <Text>FriendsListScreen</Text>
        <Button
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
          title="Profile"
          onPress={() => this.props.navigation.navigate('friendProfile')}
        />
      </View>
    );
  }
}

export default FriendsListScreen;
