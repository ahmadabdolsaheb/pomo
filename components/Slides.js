import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <SocialIcon
          style={styles.socialIconStyle}
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
        console.log(slide.text);
         return (
         <View
         style={[styles.slideStyle, { backgroundColor: slide.textColor }]}
         key={slide.title}
         >
          <Text style={styles.textStyle}>{slide.title}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    console.log(this.props.data);
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
         {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    width: SCREEN_WIDTH,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 30
  },
  socialIconStyle: {
    width: 300
  }
};

export default Slides;
