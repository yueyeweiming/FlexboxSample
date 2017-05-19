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

export default class FlexSample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flexIndex: 0,
      currentFlexDirection: 0,
      alignItemIndex: 0,
      justifyContentIndex: 0,
      alignSelfIndex: 0,
    };
  }

  changeFlex = () => {
    this.setState({flexIndex: ((this.state.flexIndex + 1) % flexs.length)});
  }

  changeTitle = () => {
    Toast.show('test', {position: Toast.positions.CENTER});
  }


  render() {

    return (
      <View style={[styles.container, {flexDirection: 'row', marginTop: 20}]}>
        <View style={{alignItems: 'center', flex: 4, height: 500}}>
          <Button title={'child3\'s flex:\n' + flexs[this.state.flexIndex]}
                  onPress={this.changeFlex}>
          </Button>

          <Button title={'flexDirection:\n' + flexDirections[this.state.currentFlexDirection]}
                  onPress={this.onPressTest}>
          </Button>
        </View>
        <View style={[styles.container, {
          flex: 7,
          flexDirection: flexDirections[this.state.currentFlexDirection],
          justifyContent: justifyContents[this.state.justifyContentIndex],
          alignItems: alignItems[this.state.alignItemIndex],
        }]}>
          <Text style={styles.component1}>
            component1
          </Text>
          <Text style={styles.component2}>
            component2
          </Text>
          <Text style={[styles.component3, {
            flex: flexs[this.state.flexIndex],
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
    flex: 1
  },
  component2: {
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'dodgerblue',
    flex: 1
  },

  component3: {
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'lime',
  }
});
const flexDirections = ['column', 'row'];
const justifyContents = ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'];
const alignItems = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'];
const alignSelfs = ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
const flexs = [1, 3, 7];

AppRegistry.registerComponent('FlexSample', () => FlexSample);
