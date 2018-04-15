import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { PHOTO_ITEM, TEXT_ITEM, VIDEO_ITEM, QUOTE_ITEM } from './Buyer';
import ScaledImage from './ScaledImage';
import { Video } from 'expo';

var screenTitle = 'Hornbill Hats ';

const products = [
  {
    id: '1a',
    title: 'Ornaments',
    description: 'Handmade ornaments using rare stones',
    quantityAvailable: 3,
    pricePerItem: 600,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/craftribe-640c8.appspot.com/o/products%2Fprod_1.jpg?alt=media&token=51618cfc-cd39-4eab-bcde-bca57bb0d185'
  },
  {
    id: '1b',
    title: 'Beads',
    description: 'Good quality beads',
    quantityAvailable: 6,
    pricePerItem: 400,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/craftribe-640c8.appspot.com/o/products%2Fprod_2.jpg?alt=media&token=d793dc29-9692-4136-8e92-f93a6f1ee58f'
  },
  {
    id: '1c',
    title: 'Dao',
    description: 'Mishmi dao',
    quantityAvailable: 14,
    pricePerItem: 700,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/craftribe-640c8.appspot.com/o/products%2Fprod_3.jpg?alt=media&token=1e123058-b733-496b-a640-a1c8e4810435'
  },
  {
    id: '1d',
    title: 'Pottery Vessels',
    description: 'Beautiful painted vessels',
    quantityAvailable: 8,
    pricePerItem: 1000,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/craftribe-640c8.appspot.com/o/products%2Fprod_4.jpg?alt=media&token=7c99b92d-cd33-43d2-a1f5-a42a01e8c77c'
  },
  {
    id: '1e',
    title: 'Gale',
    description: 'Gale for women',
    quantityAvailable: 40,
    pricePerItem: 60,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/craftribe-640c8.appspot.com/o/products%2Fprod_5.jpg?alt=media&token=d6eb1846-a98e-4984-83db-e77ac3d2d976'
  }
];

class PhotoStory extends React.Component {
  state = {
    quantity: '0'
  };
  _getView = item => {
    if (item.type == PHOTO_ITEM) {
      return (
        <View style={{ marginVertical: 10 }} key={item.id}>
          <ScaledImage uri={item.uri} />
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
          shouldPlay={false}
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
            <Card
              key={product.id}
              title={product.title}
              containerStyle={{ marginRight: 0 }}
              wrapperStyle={{ width: 200, height: 270 }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: 100,
                  height: 40
                }}
              >
                <Icon
                  name="minus-circle"
                  type="material-community"
                  color="#000"
                  size={26}
                  onPress={() => {
                    if (!parseInt(this.state.quantity)) return;
                    this.setState(state => {
                      return { quantity: '' + (parseInt(state.quantity) - 1) };
                    });
                  }}
                />
                <TextInput
                  value={this.state.quantity}
                  onChangeText={quantity => {
                    if (isNaN(quantity)) return;
                    this.setState({ quantity });
                  }}
                  style={{
                    paddingHorizontal: 2,
                    borderRadius: 60,
                    borderWidth: 1,
                    backgroundColor: '#fff',
                    color: '#000',
                    textAlign: 'center',
                    fontSize: 10,
                    width: 30
                  }}
                  keyboardType={'numeric'}
                  underlineColorAndroid={'transparent'}
                />
                <Icon
                  name="plus-circle"
                  type="material-community"
                  color="#000"
                  onPress={() => {
                    this.setState(state => {
                      return { quantity: '' + (parseInt(state.quantity) + 1) };
                    });
                  }}
                  size={26}
                />
              </View>
              <ScaledImage uri={product.imageUrl} />
              <View
                style={{
                  position: 'absolute',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  bottom: 35,
                  left: 5
                }}
              >
                <TouchableOpacity onPress={() => {}}>
                  <Icon
                    name="cart-plus"
                    type="material-community"
                    color="orange"
                    onPress={() => {}}
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      fontWeight: 'bold',
                      padding: 2,
                      margin: 2,
                      width: 55,
                      textAlign: 'center',
                      color: '#000'
                    }}
                  >
                    Add to cart
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Icon
                    name="attach-money"
                    type="material"
                    color="orange"
                    onPress={() => {}}
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      fontWeight: 'bold',
                      padding: 2,
                      margin: 2,
                      width: 55,
                      textAlign: 'center',
                      color: '#000'
                    }}
                  >
                    Buy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Icon
                    name="more"
                    type="material-community"
                    color="orange"
                    onPress={() => {}}
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      fontWeight: 'bold',
                      padding: 2,
                      margin: 2,
                      width: 55,
                      textAlign: 'center',
                      color: '#000'
                    }}
                  >
                    Know more
                  </Text>
                </TouchableOpacity>
              </View>
            </Card>
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
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Get in touch</Text>
        <TextInput placeholder="Email Id" />
        <TextInput placeholder="Message" />
        <Button title="Send Message" />
        <View style={{ height: 40 }} />
      </ScrollView>
    );
  }
}
export default PhotoStory;
