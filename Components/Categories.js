import {View, FlatList, Text, StyleSheet} from 'react-native';
import pic1 from '../assets/image/Rectangle30.png';
import pic2 from '../assets/image/Rectangle31.png';
import pic3 from '../assets/image/Rectangle28.png';
import pic4 from '../assets/image/Rectangle32.png';
import pic5 from '../assets/image/Rectangle33.png';
import pic6 from '../assets/image/Rectangle34.png';
import FlowerPack from './FlowerPack';

const Categories = ({navigation}) => {
  const datas = [
    {
      image: pic1,
      head: 'Wholesale Flower',
      available: '206 Products',
      id: 1,
    },
    {
      image: pic2,
      head: 'New',
      available: '137 Products',
    },
    {
      image: pic3,
      head: 'Famous',
      available: '100 Products',
    },
    {
      image: pic4,
      head: 'Latest',
      available: '80 Products',
    },
    {
      image: pic5,
      head: 'Recent',
      available: '50 Products',
    },
    {
      image: pic6,
      head: 'Upcoming',
      available: '120 Products',
    },
  ];
  return (
    <View style={{marginBottom: 70}}>
      <Text style={styles.text}>All Categories</Text>
      <FlatList
        data={datas}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FlowerPack item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
});

export default Categories;
