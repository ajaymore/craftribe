import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Dimensions, View } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class ScaledImage extends React.Component {
  state = {
    width: 0,
    height: 0
  };
  render() {
    return (
      <View
        onLayout={event => {
          const { x, y, width, height } = event.nativeEvent.layout;
          this.setState({ viewWidth: width });
          Image.getSize(this.props.uri, (widthImage, heightImage) => {
            this.setState({
              width: width,
              height: heightImage / (widthImage / width)
            });
          });
        }}
      >
        <Image
          source={{ uri: this.props.uri }}
          style={{ height: this.state.height, width: this.state.width }}
        />
      </View>
    );
  }
}

ScaledImage.propTypes = {
  uri: PropTypes.string.isRequired
};
