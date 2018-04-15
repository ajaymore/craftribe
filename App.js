import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Otp from './code/Otp';
import Login from './code/Login';
import Buyer from './code/Buyer';

export default class App extends React.Component {
  state = { currentScreen: 'Login' };
  render() {
    if (this.state.currentScreen == 'Login') {
      return <Login onChange={() => this.setState({ currentScreen: 'OTP' })} />;
    }

    if (this.state.currentScreen == 'OTP') {
      return <Otp onChange={() => this.setState({ currentScreen: 'Buyer' })} />;
    }

    if (this.state.currentScreen == 'Buyer') {
      return <Buyer />;
    }
  }
}
