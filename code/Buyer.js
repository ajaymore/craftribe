import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import PhotoStory from './PhotoStory';
import RegisterAsSeller from './RegisterAsSeller';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';
import { Card, Header, Button } from 'react-native-elements';
export const PHOTO_ITEM = 'PHOTO_ITEM';
export const QUOTE_ITEM = 'QUOTE_ITEM';
export const TEXT_ITEM = 'TEXT_ITEM';
export const VIDEO_ITEM = 'VIDEO_ITEM';

var screenTitle = 'Buyer';
var photoStories = [
  {
    id: '1',
    title: 'Costumes and textiles',
    mainPhoto:
      'https://firebasestorage.googleapis.com/v0/b/craftribe-640c8.appspot.com/o/costumes-and-textiles-of-arunachal-pradesh-17-638.jpg?alt=media&token=f03cd7d9-8cdf-48bd-aace-c1993b1b25fe',
    description:
      'A handicraft, sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where useful and decorative objects are made completely by hand or by using only simple tools.',
    details: [
      {
        order: 4,
        type: PHOTO_ITEM,
        uri:
          'https://firebasestorage.googleapis.com/v0/b/craftribe-640c8.appspot.com/o/17_7846.jpg?alt=media&token=c66ea7b8-8c11-4edd-9afe-325142c9eb79',
        caption: 'The unique and exquisite craft!!',
        id: '1a'
      },
      {
        order: 1,
        type: TEXT_ITEM,
        description:
          "India's northeast is undoubtedly a land of immense potential and possibilities with wonders in every corner of the region. Its people, with rich cultural heritage make the region all the more exceptional. Handlooms and handicrafts form an integral part of the lifestyle of the indigenous people of this region.",
        id: '1b'
      },
      {
        order: 5,
        type: QUOTE_ITEM,
        text: 'Simplicity is the Ultimate form of Sophistication.',
        id: '1d'
      }
    ],
    tags: ['Bamboo', 'Texttile']
  },
  {
    id: '2',
    title: 'Hornbill Hats',
    mainPhoto:
      'https://firebasestorage.googleapis.com/v0/b/craftribe-640c8.appspot.com/o/86.JPG?alt=media&token=34f5381e-b4c8-4016-b866-8fdac61d7f2f',
    description:
      'A handicraft, sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where useful and decorative objects are made completely by hand or by using only simple tools.',
    details: [],
    tags: ['Bamboo', 'Handloom']
  },
  {
    id: '3',
    title: 'Nyshi Gale',
    mainPhoto:
      'https://firebasestorage.googleapis.com/v0/b/craftribe-640c8.appspot.com/o/nyshi-gale2000.jpg?alt=media&token=fadaabcf-7b9b-4c9a-a3b5-672fedd9ed71',
    description:
      'A handicraft, sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where useful and decorative objects are made completely by hand or by using only simple tools.',
    details: [],
    tags: ['Pottery']
  }
];

class Buyer extends React.Component {
  state = {
    story: false
  };
  render() {
    if (this.state.story) {
      return (
        <View
          style={{
            flex: 1,
            paddingTop: Constants.statusBarHeight
          }}
        >
          <Header
            leftComponent={{
              icon: 'arrow-back',
              color: '#fff',
              fontSize: 25,
              onPress: () => this.setState({ story: false })
            }}
            centerComponent={{
              text: 'Craftribe',
              style: { color: '#fff', fontSize: 25 }
            }}
            rightComponent={{ icon: 'search', color: '#fff' }}
          />
          <PhotoStory story={this.state.story} />
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Constants.statusBarHeight
        }}
      >
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
          rightComponent={{ icon: 'search', color: '#fff' }}
        />
        <ScrollView>
          {photoStories.map(story => (
            <TouchableOpacity
              onPress={() => {
                this.setState({ story });
              }}
              key={story.id}
            >
              <Card title={story.title} image={{ uri: story.mainPhoto }}>
                <Text style={{ marginBottom: 10 }}>{story.description}</Text>
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

class Seller extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Register as seller'
  };

  render() {
    return <RegisterAsSeller {...this.props} />;
  }
}

class Logout extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Logout'
  };

  render() {
    return <Text>Seller</Text>;
  }
}

export default DrawerNavigator({
  Home: {
    screen: Buyer
  },
  Seller: {
    screen: Seller
  },
  Logout: {
    screen: Logout
  }
});
