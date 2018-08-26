import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  SegmentedControlIOS,
  StyleSheet,
  Dimensions,
 } from 'react-native';
import { Icon } from 'react-native-elements';

class FriendsListScreen extends Component {
  static navigationOptions = {
    title: 'Friends',
    header: null,
    tabBarIcon: ({ tintColor }) => <Icon
              name="users"
              size={30}
              type="entypo"
              color={tintColor}
    />
  }

  state = { selectedIndex: 0 };

  render() {
    return (
      <View style={styles.container}>
        <Text>FriendsListScreen</Text>
        <Text>FriendsListScreen</Text>
        <SegmentedControlIOS
          values={['Friends', 'Invite', 'Requests']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
          }}
        />
        {this.state.selectedIndex === 0 ?
          (<Button
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0, 122, 255, 1)"
            title="Profile"
            onPress={() => this.props.navigation.navigate('friendProfile')}
          />) : ('')}
          <Text>FriendsListScreen</Text>
          <Text>FriendsListScreen</Text>
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

export default FriendsListScreen;
