import {Image, View, StyleSheet, TextInput, Dimensions} from 'react-native';
import headimg from '../../assets/image/search.png';

const windowDimensions = Dimensions.get('window').width;
const Header = () => {
  return (
    <View>
      <View style={styles.head}>
        <Image source={headimg} style={styles.searchimg} />
        <TextInput
          placeholder={'Search'}
          placeholderTextColor="#fff"
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: windowDimensions,
    backgroundColor: 'black',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchimg: {
    width: 25,
    height: 25,
    color: 'black',
    marginRight: 20,
    marginLeft: 15,
  },
  input: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    width: 150,
    borderRadius: 50,
  },
});

export default Header;
