import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class AudioProvider extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    getpermission();
  }
  render() {
    return (
      <View>
        <Text>AudioProvider</Text>
      </View>
    );
  }
}

export default AudioProvider;
