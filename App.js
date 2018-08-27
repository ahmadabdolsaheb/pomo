import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Icon } from 'react-native-elements';
import store from './store';
//import keys from './keys';
import AuthScreen from './screens/AuthScreen';
import FriendProfileScreen from './screens/FriendProfileScreen';
import FriendsListScreen from './screens/FriendsListScreen';
import PomodoroScreen from './screens/PomodoroScreen';
import SettingsScreen from './screens/SettingsScreen';
import StatScreen from './screens/StatScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  render() {
    const FriendsNavigator = createStackNavigator({
      friendsList: { screen: FriendsListScreen },
      friendProfile: { screen: FriendProfileScreen }
    });

    FriendsNavigator.navigationOptions = {
      title: 'Friends',
      header: null,
      tabBarIcon: ({ tintColor }) => <Icon
                name="users"
                size={30}
                type="entypo"
                color={tintColor}
      />
    };

    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          settings: { screen: SettingsScreen },
          pomodoro: { screen: PomodoroScreen },
          Stats: { screen: StatScreen },
          friends: { screen: FriendsNavigator }
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    });


    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
