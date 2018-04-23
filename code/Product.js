import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';

class Product extends React.Component {
  state = {
    quantity: '0'
  };
  render() {
    const { product } = this.props;
    return (
      <Card
        title={product.title}
        containerStyle={{ marginRight: 0 }}
        wrapperStyle={{ width: 200, height: 305 }}
      >
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              width: 100,
              height: 40,
              alignItems: 'center'
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
                width: 30,
                height: 30
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
          <View
            style={{
              flexDirection: 'row',
              width: 100,
              height: 40,
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: 'bold', color: 'green' }}
            >{`₹ ${product.pricePerItem}`}</Text>
          </View>
        </View>
        <Image
          source={{ uri: product.imageUrl }}
          style={{
            height: 150,
            width: 200,
            resizeMode: Image.resizeMode.cover
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
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
    );
  }
}

export default Product;
