import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Icon } from 'react-native-elements';

export default class AppCamera extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row'
              }}
            >
              <Icon
                raised
                name="pencil"
                type="material-community"
                color="#000"
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                  });
                }}
              />
              <Icon
                raised
                name="camera"
                type="material-community"
                color="#000"
                onPress={() => async () => {
                  if (this.camera) {
                    let photo = await this.camera.takePictureAsync();
                  }
                }}
              />
              <Icon
                raised
                name="video"
                type="material-community"
                color="#000"
                onPress={() => async () => {
                  if (this.camera) {
                    let photo = await this.camera.takePictureAsync();
                  }
                }}
              />
            </View>
          </Camera>
        </View>
      );
    }
  }
}
