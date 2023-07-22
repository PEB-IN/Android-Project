import {View, FlatList, StyleSheet} from 'react-native';
import Products from '../Components/Products';
import singleimg from '../assets/image/Rectangle32.png';
import singleimg1 from '../assets/image/Rectangle33.png';
import singleimg2 from '../assets/image/Rectangle34.png';

const BuyProduct = () => {
  const Buyprod = [
    {
      image: singleimg,
      heading: 'Fuchsia Rose NO.5013',
      subheading: 'Price On rpl',
      id: 1,
    },
    {
      image: singleimg1,
      heading: 'Sacovia Flower NO.2113',
      subheading: 'Price On select',
      id: 2,
    },
    {
      image: singleimg2,
      heading: 'France Rose NO.5223',
      subheading: 'Price On selected',
      id: 3,
    },
    {
      image: singleimg,
      heading: 'Russia Flower NO.5016',
      subheading: 'Price On Selection',
      id: 4,
    },
    {
      image: singleimg,
      heading: 'Ooty Flower NO.5016',
      subheading: 'Price On Selection',
      id: 5,
    },
    {
      image: singleimg,
      heading: 'American Flower NO.5016',
      subheading: 'Price On Selection',
      id: 6,
    },
  ];
  return (
    <View style={{width: '100%'}}>
      <FlatList
        data={Buyprod}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Products item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-around',
    marginBottom: 25,
  },
});

export default BuyProduct;
