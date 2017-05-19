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
        this.state = {flex: false,
            currentFlexDirection:0,
            alignItems:false,
            justifyContent:false,
        };
    }

    render() {
        const flexDirections = ['row','column'];
        return (
            <View style={[styles.container]}>
                <Text style={styles.component1}>
                    component1
                </Text>
                <Text style={styles.component2}>
                    component2
                </Text>
                <Text style={[styles.component3, {flex: 3,}]}>
                    component3
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'navajowhite',
    },
    component1: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'orangered',
    },
    component2: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        backgroundColor: 'dodgerblue',
    },

    component3: {
        textAlign: 'center',
        color: '#333333',
        backgroundColor: 'lime',
        marginBottom: 5,
    }
});

AppRegistry.registerComponent('FlexSample', () => FlexSample);