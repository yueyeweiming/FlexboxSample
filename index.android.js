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
      </View>
    );
  }
}

/*
 Sample1 Embedding Expressions in JSX
 You can embed any JavaScript expression in JSX by wrapping it in curly braces.
 */
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
//end sample1 Embedding Expressions in JSX

/*
 * Sample2 JSX is an Expression Too
 After compilation, JSX expressions become regular JavaScript objects.
 * */
function getGreeting() {
  return <Text>
    sample2, {formatName(user)};
  </Text>
}
// end Sample2 JSX is an Expression Too


AppRegistry.registerComponent('FlexSample', () => FlexSample);