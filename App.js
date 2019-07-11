/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Client } from 'bugsnag-react-native'
// import firebase from '@react-native-firebase/app'
// import database from '@react-native-firebase/database'
import MainNavigation from './src/Router'

const bugsnag = new Client("927de12043e4c5cd34edefd73fd6de29");


export default class App extends Component {

  componentDidMount() {
    // bugsnag.notify(new Error("Test error"));
  }



  render() {
    return <MainNavigation/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
