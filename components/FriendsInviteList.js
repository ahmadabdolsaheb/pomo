import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS,
  Dimensions,
 } from 'react-native';

 import { ListItem, Icon, List, Button, Badge, SearchBar } from 'react-native-elements';

class FriendsInviteList extends Component {
  render() {
    return (
      <View>
      <SearchBar
        lightTheme
        containerStyle={{ backgroundColor: 'white', marginTop: 20 }}
        inputStyle={{ backgroundColor: 'white' }}
        onChangeText={console.log('change')}
        onClearText={console.log('value')}
        icon={{ type: 'font-awesome', name: 'search' }}
        placeholder='Search by user ID'
      />

      <Button
        small
        containerViewStyle={{ marginTop: 20 }}
        buttonStyle={{
            backgroundColor: '#007aff',
            height: 45,
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5
          }}
        icon={{ name: 'mail' }}
        title='Invite by email'
        onPress={() => console.log('hello')}
      />
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
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
};

export default FriendsInviteList;
