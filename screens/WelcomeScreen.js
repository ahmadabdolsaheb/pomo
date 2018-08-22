import _ from 'lodash';
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';
import SLIDES_DATA from '../data/welcomeData';


class WelcomeScreen extends Component {
  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
    this.setState({ token });
  }
  onSlideComplete = () => {
    this.props.navigation.navigate('auth');
  }
  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    console.log(this.state.token);
    return (
      <Slides data={SLIDES_DATA.data} onComplete={this.onSlideComplete} />
    );
  }
}

export default WelcomeScreen;
