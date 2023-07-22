import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const WholeSaleContent = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={{padding: 5}}>
        <View>
          <Image source={item.image} style={styles.img} />
        </View>
        <View>
          <Text style={styles.text}>{item.heading}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },
  text: {
    textAlign: 'center',
    padding: 4,
    color: 'black',
    fontSize: 12,
  },
});

export default WholeSaleContent;
