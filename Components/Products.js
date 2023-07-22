import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Products = ({item}) => {
  return (
    <View style={styles.content}>
      <View>
        <TouchableOpacity>
          <View>
            <Image source={item.image} style={styles.img} />
          </View>
          <View>
            <Text style={styles.headtext}>{item.heading}</Text>
            <Text style={styles.subtext}>{item.subheading}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.addbtn}>
            <Text style={styles.btntext1}>
              <Entypo name="plus" size={18} color="black" /> Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buybtn}>
            <Text style={styles.btntext}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 8,
    width: '50%',
  },

  img: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    marginBottom: 6,
  },
  headtext: {
    fontWeight: 'bold',
    marginBottom: 16,
    fontSize: 16,
    color: 'black',
  },
  subtext: {
    fontSize: 16,
    marginBottom: 14,
    color: 'black',
    letterSpacing: 1,
  },
  buybtn: {
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  addbtn: {
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 5.5,
    alignItems: 'center',
    borderRadius: 5,
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btntext: {
    color: 'white',
    fontWeight: 'bold',
  },
  btntext1: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Products;
