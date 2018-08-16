import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
//import keys from './keys';
import AuthScreen from './screens/AuthScreen';
import FriendProfileScreen from './screens/FriendProfileScreen';
import FriendsInviteScreen from './screens/FriendsInviteScreen';
import FriendsListScreen from './screens/FriendsListScreen';
import FriendsRequestScreen from './screens/FriendsRequestScreen';
import PomodoroScreen from './screens/PomodoroScreen';
import SettingsScreen from './screens/SettingsScreen';
import StatScreen from './screens/StatScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          settings: SettingsScreen,
          pomodoro: PomodoroScreen,
          Stats: StatScreen,
          friends: {
            screen: createBottomTabNavigator({
              friendsList: FriendsListScreen,
              friendsInvite: FriendsInviteScreen,
              friendsRequest: FriendsRequestScreen
            })
          }
        })
      }
    });

    return (

        <MainNavigator />

    );
  }
}
