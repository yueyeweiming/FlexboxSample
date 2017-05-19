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
        this.state = {
            flexIndex: 0,
            currentFlexDirection: 1,
            alignItemIndex: 0,
            justifyContentIndex: 0,
            alignSelfIndex: 0,
        };
    }

    render() {
        const flexDirections = ['row', 'column'];
        const justifyContents = ['flex-start', 'flex-end', 'center', 'space-around', 'space-between'];
        const alignItems = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
        const alignSelfs = ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'];
        const flexs = [1, 3, 7];


        return (
            <View style={[styles.container, {
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

AppRegistry.registerComponent('FlexSample', () => FlexSample);
