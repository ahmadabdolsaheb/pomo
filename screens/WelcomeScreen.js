import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';
import SLIDES_DATA from '../data/welcomeData';


class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={SLIDES_DATA.data} />
    );
  }
}

export default WelcomeScreen;
