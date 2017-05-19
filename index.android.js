/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FlexSample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>
          sample1, {formatName(user)}!
        </Text>

        {getGreeting(user)}

        <Text style={{color: sample3.dodgerblueColor}}>
          sample3,dodgerblue
        </Text>
      </View>
    );
  }
}

/*
 1 Embedding Expressions in JSX
 You can embed any JavaScript expression in JSX by wrapping it in curly braces.
 */
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
//end 1 Embedding Expressions in JSX

/*
 * 2 JSX is an Expression Too
 After compilation, JSX expressions become regular JavaScript objects.
 * */
function getGreeting() {
  return <Text>
    sample2, {formatName(user)};
  </Text>
}
// end 2 JSX is an Expression Too

//3 ,Specifying Attributes with JSX
const sample3 = {
  dodgerblueColor: 'dodgerblue'
}
//end 3 ,Specifying Attributes with JSX

//4 JSX tags may contain children:

//5 JSX Prevents Injection Attacks


AppRegistry.registerComponent('FlexSample', () => FlexSample);