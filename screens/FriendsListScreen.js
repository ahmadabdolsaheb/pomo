import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS,
  Dimensions,
 } from 'react-native';

 import { ListItem, Icon, List, Button, Badge, SearchBar } from 'react-native-elements';
 import FriendsList from '../components/FriendsList';
import FriendsInviteList from '../components/FriendsInviteList';
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

class FriendsListScreen extends Component {
  static navigationOptions = {
    title: 'Friends',
    header: null,
  }

  state = { selectedIndex: 1 };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.controlsContainer}>
          <SegmentedControlIOS
            style={styles.SegmentedControlIOS}
            values={['Friends', 'Invite', 'Requests']}
            selectedIndex={this.state.selectedIndex}
            onChange={(event) => {
              this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
            }}
          />
        </View>
        {this.state.selectedIndex === 0 ?
          (<FriendsList friends={users} />) : this.state.selectedIndex === 1 ?
          (<FriendsInviteList friends={users} />)
             : ('')}
      </View>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  controlsContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SegmentedControlIOS: {

    width: Dimensions.get('window').width * 0.9
  }
};

export default FriendsListScreen;
