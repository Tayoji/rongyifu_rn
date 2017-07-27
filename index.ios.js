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
import Login from './app/pages/Login'
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Root: {
        screen: Root
    },
    Login:{
        screen:Login
    }
},{
    initialRouteName: 'Root', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerBackTitle:'返回'
    },
    mode: 'model',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏

});

AppRegistry.registerComponent('rongyifu', () => App);
