import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  SegmentedControlIOS,
  StyleSheet,
  Dimensions,
 } from 'react-native';

 import { Card, ListItem, Icon, List, Badge } from 'react-native-elements';

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

  state = { selectedIndex: 0 };

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
          (<List containerStyle={{ marginBottom: 20 }}>
                 {
                   users.map((u, i) =>

                       <ListItem
                         key={i}
                         badge={{ value: 234521, containerStyle: { backgroundColor: '#007aff' }}}
                         roundAvatar
                         title={u.name}
                         avatar={{ uri: u.avatar }}
                         onPress={() => this.props.navigation.navigate('friendProfile')}
                       />
                   )
                 }
               </List>) : ('')}
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
