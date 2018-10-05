import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS,
  Dimensions,
 } from 'react-native';

 import { ListItem, Icon, List, Button, Badge } from 'react-native-elements';

class FriendsList extends Component {
  render() {
    return (
      <List containerStyle={{ marginBottom: 20 }}>
       {
         this.props.friends.map((u, i) =>
             <ListItem
               hideChevron
               key={i}
               badge={{ value: 234521, containerStyle: { backgroundColor: '#007aff' } }}
               roundAvatar
               title={u.name}
               avatar={{ uri: u.avatar }}
               onPress={() => this.props.navigation.navigate('friendProfile')}
             />
         )
       }
      </List>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
};

export default FriendsList;
