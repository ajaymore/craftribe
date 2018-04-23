import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { PHOTO_ITEM, TEXT_ITEM, VIDEO_ITEM, QUOTE_ITEM } from './Buyer';
import { Video } from 'expo';
import Product from './Product';

var screenTitle = 'Costumes and textiles';

const products = [
  {
    id: '1a',
    title: 'Ornaments',
    description: 'Handmade ornaments using rare stones',
    quantityAvailable: 3,
    pricePerItem: 600,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/craftribe/products/prod_1.jpg'
  },
  {
    id: '1b',
    title: 'Beads',
    description: 'Good quality beads',
    quantityAvailable: 6,
    pricePerItem: 400,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/craftribe/products/prod_2.jpg'
  },
  {
    id: '1c',
    title: 'Dao',
    description: 'Mishmi dao',
    quantityAvailable: 14,
    pricePerItem: 700,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/craftribe/products/prod_3.jpg'
  },
  {
    id: '1d',
    title: 'Pottery Vessels',
    description: 'Beautiful painted vessels',
    quantityAvailable: 8,
    pricePerItem: 1000,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/craftribe/products/prod_4.jpg'
  },
  {
    id: '1e',
    title: 'Gale',
    description: 'Gale for women',
    quantityAvailable: 40,
    pricePerItem: 60,
    imageUrl:
      'https://s3.ap-south-1.amazonaws.com/craftribe/products/prod_5.jpg'
  }
];

class PhotoStory extends React.Component {
  _getView = item => {
    if (item.type == PHOTO_ITEM) {
      return (
        <View style={{ marginVertical: 10 }} key={item.id}>
          <Image
            source={{ uri: item.uri }}
            style={{ width: 400, height: 400 }}
          />
          <Text
            style={[
              {
                fontSize: 13,
                paddingHorizontal: 15,
                fontStyle: 'italic'
              }
            ]}
          >
            {item.caption}
          </Text>
        </View>
      );
    }
    if (item.type == QUOTE_ITEM) {
      return (
        <View style={{ marginVertical: 10 }} key={item.id}>
          <Text
            style={[
              {
                fontSize: 20,
                padding: 15,
                borderLeftWidth: 8,
                borderLeftColor: 'gray',
                marginVertical: 10
              }
            ]}
          >
            {item.text}
          </Text>
        </View>
      );
    }
    if (item.type == TEXT_ITEM) {
      return (
        <View style={{ marginVertical: 10 }} key={item.id}>
          <Text style={[{ padding: 10 }]}>{item.description}</Text>
        </View>
      );
    }
    if (item.type == VIDEO_ITEM) {
      return (
        <Video
          key={item.id}
          source={{ uri: item.uri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={true}
          style={{ width: Dimensions.get('window').width, height: 300 }}
        />
      );
    }
  };

  render() {
    var story = this.props.story;
    return (
      <ScrollView
        style={{
          flex: 1
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 10
          }}
        >
          {story.title}
        </Text>
        {story.details.map(item => this._getView(item))}
        <ScrollView horizontal={true}>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ScrollView>
        <View style={{ position: 'absolute', right: 10, bottom: 10 }}>
          <Icon
            raised
            name="cart"
            type="material-community"
            color="#000"
            onPress={() => {}}
          />
        </View>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>
            Get in touch
          </Text>
          <TextInput placeholder="Email Id" />
          <TextInput placeholder="Message" />
          <Button title="Send Message" />
          <View style={{ height: 40 }} />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
export default PhotoStory;
