import React, { Component } from 'react';
import {
  View,
  Text,
  SegmentedControlIOS,
  Dimensions,
 } from 'react-native';

 import { ListItem, Icon, List, Button, Badge, SearchBar } from 'react-native-elements';
 import FriendsList from '../components/FriendsList';

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
            (
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
                 users.map((u, i) =>

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
              </List></View>)
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
