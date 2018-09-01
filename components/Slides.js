import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
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

  // stringify = (location, id, format) => `${location}${id}${format}`


  renderSlides() {
    return this.props.data.map((slide, index) =>
         <View
           style={[styles.slideStyle, { backgroundColor: slide.textColor }]}
           key={slide.title}
         >
         <View style={styles.imageView}>
         <Image
             style={{ width: 300, height: 300 }}
              source={ require('../assets/1.png') }
         />
         //../assets/+${index + 1}.png
         </View>
         <View style={styles.textView}>
            <Text style={styles.textStyle}>{slide.title}</Text>
            {this.renderLastSlide(index)}
          </View>
        </View>
    );
  }

  render() {
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
    // backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  imageView: {
    flex: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textView: {
    flex: 3,
    backgroundColor: 'white',
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
