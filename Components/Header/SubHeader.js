import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';

const windowDimensions = Dimensions.get('window').width;

const SubHeader = () => {
  return (
    <View style={styles.contenthead}>
      <TouchableOpacity>
        <View style={{width: 25}}>
          <AntDesign name="arrowleft" size={26} color="black" />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>WholeSale Flowers</Text>
      </View>
      <TouchableOpacity>
        <View style={{width: 25}}>
          <Entypo name="menu" size={30} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenthead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: windowDimensions,
    backgroundColor: '#F6F7F9',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default SubHeader;
