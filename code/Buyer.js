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
    mainPhoto: 'https://s3.ap-south-1.amazonaws.com/craftribe/costumes.jpg',
    description:
      'The textile patterns found among the tribes of Arunachal Pradesh such as Adi, Mishmi and Apatani are invariably of geometric pattern. Most popular motives are Zig-Zag lines and angular designs. The floral and Zemorphic patterns are more or less  geometric form. The simple and straight lines, stripes and bands and similar other patterns are most common. Contrasts and combination of colours are quite popular. The highly disciplined Adi and Apatani concentrate on simple straight line, while the strongly individualistic Mishmis go in for great celebration of pattern.',
    details: [
      {
        order: 4,
        type: PHOTO_ITEM,
        uri: 'https://s3.ap-south-1.amazonaws.com/craftribe/photostory.jpg',
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
      },
      {
        order: 2,
        type: VIDEO_ITEM,
        uri: 'https://s3.ap-south-1.amazonaws.com/craftribe/trailer_hd.mp4',
        id: '1x'
      }
    ],
    tags: ['Costumes', 'Textile']
  },
  {
    id: '2',
    title: 'Bamboo and cane artifacts',
    mainPhoto: 'https://s3.ap-south-1.amazonaws.com/craftribe/bamboo2.jpg',
    description:
      'A handicraft, sometimes more precisely expressed as artisanal handicraft or handmade, is any of a wide variety of types of work where useful and decorative objects are made completely by hand or by using only simple tools.',
    details: [],
    tags: ['Bamboo', 'Cane']
  },
  {
    id: '3',
    title: 'Tribal ornaments',
    mainPhoto: 'https://s3.ap-south-1.amazonaws.com/craftribe/ornaments.jpg',
    description:
      'Apart from the other important items, the tribes of Arunachal Pradesh are famous for their exquisite jewelleries made from their primary materials. They embellish these trinkets with other materials such as colourful beads, wild seeds, feathers of birds, green wings of beetles, brass, bones, ivory, silver and gold.',
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginBottom: 10
                  }}
                >
                  {story.tags.map(tag => (
                    <Text
                      key={tag}
                      style={{
                        backgroundColor: 'green',
                        padding: 5,
                        marginRight: 5,
                        borderRadius: 5,
                        color: 'white'
                      }}
                    >
                      {tag}
                    </Text>
                  ))}
                </View>
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
