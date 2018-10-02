import React, { Component } from 'react';
import { View, ART, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import * as d3 from 'd3';

const { Surface, Group, Shape } = ART;

class PomodoroScreen extends Component {

  static navigationOptions ={
    title: 'Pomo',
    tabBarIcon: ({ tintColor }) => <Icon
              name="time-slot"
              size={30}
              type="entypo"
              color={tintColor}
    />
  }

  render() {
    const userPurchases = [
      {
        itemName: 'Mountain Dew',
        price: 100,
        color: '#007aff'

      },
      {
        itemName: 'Shoes',
        price: 10,
        color: '#FFFFFF'
      }
    ];
    const smallerDimention = Dimensions.get('window').height < Dimensions.get('window').width
      ? Dimensions.get('window').height :
      Dimensions.get('window').width;
    const dimention = smallerDimention * 0.9;
    const sectionAngles = d3.pie().value(d => d.price)(userPurchases);
    const path = d3.arc()
    .outerRadius((dimention / 2)) //must be less than 1/2 the chart's height/width
    .padAngle(0) //defines the amount of whitespace between sections
    .innerRadius((dimention / 2) * 0.96); //the size of the inner 'donut' whitespace
    return (
    <View style={styles.container}>
        <Surface width={dimention} height={dimention} style={styles.circle}>
          <Group x={dimention / 2} y={dimention / 2}>
            {sectionAngles.map(section => (
             <Shape
               key={section.index}
               d={path(section)}
               fill={section.data.color}
             />
           ))}
          </Group>
        </Surface>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: 'pink'
  },
});

export default PomodoroScreen;
