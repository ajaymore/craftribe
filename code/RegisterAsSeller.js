import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { Constants } from 'expo';
import AppCamera from './AppCamera';

class RegisterAsSeller extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            fontSize: 25,
            onPress: () => this.props.navigation.navigate('DrawerOpen')
          }}
          centerComponent={{
            text: 'Craftribe',
            style: { color: '#fff', fontSize: 25 }
          }}
          rightComponent={<Button title="Save" />}
        />
        <Text
          style={{
            padding: 10,
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 15
          }}
        >
          Create photo story
        </Text>
        <TextInput
          placeholder="Name of your business"
          style={{ padding: 10, marginBottom: 20, fontSize: 20 }}
        />
        <TextInput
          placeholder="Description of business"
          style={{ padding: 10, marginBottom: 20, fontSize: 20 }}
        />
        <AppCamera />
      </View>
    );
  }
}

export default RegisterAsSeller;
