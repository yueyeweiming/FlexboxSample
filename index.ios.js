/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Toast from 'react-native-root-toast'

const flexDirections = ['column', 'row'];
const justifyContents = ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'];
const alignItems = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'];
const alignSelfs = ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
const flexs = [1, 3, 7];


export default class FlexSample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commonComponentFlex: 1,
      component3Flex: 1,
      currentFlexDirection: 0,
      alignItemIndex: 0,
      justifyContentIndex: 0,
      alignSelfIndex: 0,
    };
  }

  changeFlex = () => {
    this.setState({
      component3Flex: (this.state.component3Flex + 1) % 5,
      commonComponentFlex: 1,
    });
  }

  changeFlexDirection = () => {
    this.setState({currentFlexDirection: ((this.state.currentFlexDirection + 1) % flexDirections.length)});
  }

  changeJustifyContent = () => {
    this.setState({
      justifyContentIndex: ((this.state.justifyContentIndex + 1) % justifyContents.length),
      commonComponentFlex: 0,
      component3Flex: 0
    })
  }


  render() {

    return (
      <View style={[styles.container, {flexDirection: 'row', marginTop: 20}]}>

        <View style={{alignItems: 'center', flex: 4, height: 500}}>
          <Button title={'child3\'s flex:\n' + this.state.component3Flex}
                  onPress={this.changeFlex}>
          </Button>

          <Button title={'flexDirection:\n' + flexDirections[this.state.currentFlexDirection]}
                  onPress={this.changeFlexDirection}>
          </Button>

          <Button title={'justifyContent:\n' + justifyContents[this.state.justifyContentIndex]}
                  onPress={this.changeJustifyContent}>
          </Button>

        </View>

        <View style={[styles.container, {
          flex: 7,
          flexDirection: flexDirections[this.state.currentFlexDirection],
          justifyContent: justifyContents[this.state.justifyContentIndex],
          alignItems: alignItems[this.state.alignItemIndex],
        }]}>
          <Text style={[styles.component1, {flex: this.state.commonComponentFlex}]}>
            component1
          </Text>
          <Text style={[styles.component2, {flex: this.state.commonComponentFlex}]}>
            component2
          </Text>
          <Text style={[styles.component3, {
            flex: this.state.component3Flex,
            alignSelf: alignSelfs[this.state.alignSelfIndex]
          }]}>
            component3
          </Text>
        </View>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navajowhite',
  },
  component1: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'orangered',
  },
  component2: {
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'dodgerblue',
  },

  component3: {
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'lime',
  }
});

AppRegistry.registerComponent('FlexSample', () => FlexSample);
