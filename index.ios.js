/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import  {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import TabBarContainer from './Components/TabBarContainer'

var Button = require('react-native-button')
var ImagePickerManager = require('NativeModules').ImagePickerManager;

class CameraProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
    };
  }

  _handlePress() {
    // Open Image Library:
    ImagePickerManager.launchImageLibrary({}, (response) => {
      // Same code as in above section!
      this.setState({ "avatarSource": { uri: response.uri.replace('file://', '') } })
    });
  }

  render() {
    return <TabBarContainer/>
  }
  render_old() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Image source={this.state.avatarSource} style={{ width: 200, height: 200 }} />
        <Button
          style={{ fontSize: 20, color: 'green' }}
          styleDisabled={{ color: 'red' }}
          onPress={() => this._handlePress() }
          >
          Press Me!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CameraProject', () => CameraProject);

module.exports = CameraProject;
