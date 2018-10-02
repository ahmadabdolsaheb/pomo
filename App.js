import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Icon } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { AppLoading } from 'expo';
import _ from 'lodash';
import store from './store';
import keys from './keys';
import AuthScreen from './screens/AuthScreen';
import FriendProfileScreen from './screens/FriendProfileScreen';
import FriendsListScreen from './screens/FriendsListScreen';
import PomodoroScreen from './screens/PomodoroScreen';
import SettingsScreen from './screens/SettingsScreen';
import StatScreen from './screens/StatScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  state = { token: null }

  async componentWillMount() {
    //initialize firebase
    firebase.initializeApp({
      apiKey: keys.apiKey,
      authDomain: keys.authDomain,
      databaseURL: keys.databaseURL,
      projectId: keys.projectId,
      storageBucket: keys.storageBucket,
      messagingSenderId: keys.messagingSenderId
    });
    //AsyncStorage.removeItem('fb_token');
    // setting the token
    const token = await AsyncStorage.getItem('fb_token');
    if (token) this.setState({ token });
    else this.setState({ token: false });
  }

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

    let MainNavigator = null;

    const AuthoizedNav = createBottomTabNavigator({
        settings: { screen: SettingsScreen },
        pomodoro: { screen: PomodoroScreen },
        Stats: { screen: StatScreen },
        friends: { screen: FriendsNavigator }
      }, {
        initialRouteName: 'settings',
        tabBarPosition: 'bottom',
        tabBarOptions: {
          labelStyle: { fontSize: 12 }
        }
    });

    const UnauthorizedNav = createBottomTabNavigator({
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen: AuthoizedNav
        }
      }, {
        navigationOptions: {
          tabBarVisible: false
        },
        lazy: true
    });

    if (this.state.token) MainNavigator = AuthoizedNav;

    else if (this.state.token === false) MainNavigator = UnauthorizedNav;

    // main component rendering logic
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
