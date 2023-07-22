import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const FlowerPack = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('WholeSale')}
      style={styles.content}>
      <View>
        <Image source={item.image} style={styles.imgset} />
        <Text style={styles.text}>{item.head}</Text>
        <Text style={styles.textst}>{item.available}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imgset: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    padding: 10,
    textAlign: 'center',
  },
  content: {
    padding: 8,
    width: '50%',
  },
  textst: {
    textAlign: 'center',
  },
});

export default FlowerPack;
