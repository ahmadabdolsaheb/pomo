import React, { Component } from 'react';
import { View, ART } from 'react-native';
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
        color: '#FFFFFF'
      },
      {
        itemName: 'Shoes',
        price: 90,
        color: 'rgb(122,0,122)'
      }
    ];
    const width = 250;
    const height = 250;
    const sectionAngles = d3.pie().value(d => d.price)(userPurchases);
    const path = d3.arc()
    .outerRadius(100) //must be less than 1/2 the chart's height/width
    .padAngle(0) //defines the amount of whitespace between sections
    .innerRadius(95); //the size of the inner 'donut' whitespace
    return (
    <View>
      <Surface width={width} height={height}>
        <Group x={width / 2} y={height / 2}>
          {sectionAngles.map(section => (
           <Shape
             key={section.index}
             d={path(section)}
             fill={section.data.color}
             strokeWidth={1}
           />
         ))}
        </Group>
      </Surface>
    </View>
    );
  }
}

export default PomodoroScreen;
