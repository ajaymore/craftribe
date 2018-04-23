import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { Button } from 'react-native-elements';

class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        behavior="padding"
        enabled
      >
        <Image source={require('../assets/icon.png')} />
        <Text style={{ fontSize: 55, fontWeight: 'bold', marginBottom: 20 }}>
          Craftribe
        </Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Happiness is handmade!
        </Text>
        <TextInput
          style={{
            width: 250,
            paddingBottom: 8,
            marginBottom: 10,
            marginTop: 5,
            textAlign: 'center'
          }}
          placeholder={'Please enter name'}
        />
        <TextInput
          style={{
            width: 250,
            paddingBottom: 8,
            marginBottom: 20,
            textAlign: 'center'
          }}
          placeholder={'Please enter phone number'}
        />
        <Button
          onPress={this.props.onChange}
          containerStyle={{ fontSize: 60, width: 200 }}
          title={'log in'}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
