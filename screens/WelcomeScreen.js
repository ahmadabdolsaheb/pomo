import React, { Component } from 'react';
import Slides from '../components/Slides';
import SLIDES_DATA from '../data/welcomeData';

class WelcomeScreen extends Component {
  state = { token: null }
  onSlideComplete = () => {
    this.props.navigation.navigate('auth');
  }
  render() {
    return (
      <Slides data={SLIDES_DATA} onComplete={this.onSlideComplete} />
    );
  }
}

export default WelcomeScreen;
