/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
} from 'react-native';
import { createStore ,combineReducers} from 'redux';
import { Provider, connect } from 'react-redux';
import Root from './app/pages/Root';
import { StackNavigator } from 'react-navigation';
export default class Test extends Component{
    render(){
        return (<Text>
            ssssss
        </Text>)
    }
}
const App = StackNavigator({
    Root: { screen: Root },
});

AppRegistry.registerComponent('rongyifu', () => App);
