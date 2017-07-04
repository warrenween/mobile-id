import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import KeySetup from './components/KeySetup'
import CreateAccount from './components/CreateAccount'
import GetProfile from './components/GetProfile'
import Lounge from './components/Lounge'

const MainNavigator = StackNavigator({
  Home: { screen: Home },
  KeySetup: { screen: KeySetup },
  CreateAccount: { screen: CreateAccount },
  GetProfile: { screen: GetProfile },
  Lounge: { screen: Lounge },
});

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
