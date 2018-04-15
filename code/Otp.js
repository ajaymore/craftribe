import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';

var screenTitle = 'Confirm';
var correctOTP = 2356;

class Otp extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold', paddingBottom: 60 }}>
          {screenTitle}
        </Text>
        <TextInput
          onChangeText={text => {
            if (text == correctOTP) {
              Alert.alert('You are registered!');
            }
          }}
          style={{
            width: 250,
            paddingBottom: 8,
            marginBottom: 10,
            textAlign: 'center'
          }}
          placeholder={'Please enter OTP'}
        />
        <View style={{ marginBottom: 15 }}>
          <Button
            title={'Resend'}
            onPress={() => {
              Alert.alert('OTP has been sent');
            }}
          />
        </View>
        <Button title={'Submit'} onPress={this.props.onChange} />
      </View>
    );
  }
}
export default Otp;
