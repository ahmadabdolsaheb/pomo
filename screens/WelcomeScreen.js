import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';
import SLIDES_DATA from '../data/welcomeData';


class WelcomeScreen extends Component {
  onSlideComplete = () => {
    this.props.navigation.navigate('auth');
  }
  render() {
    return (
      <Slides data={SLIDES_DATA.data} onComplete={this.onSlideComplete} />
    );
  }
}

export default WelcomeScreen;
