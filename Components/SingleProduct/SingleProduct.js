import {View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Header from '../Header/Header';
import SubHeader from '../Header/SubHeader';
import pic1 from '../../assets/image/Rectangle30.png';
import pic2 from '../../assets/image/Rectangle31.png';
import pic3 from '../../assets/image/Rectangle32.png';
import SingleProdContent from './SingleProdContent';

const SingleProduct = () => {
  // const singledata = [
  //   (image = {
  //     image: pic1,
  //     image: pic2,
  //     image: pic3,
  //   }),
  //   {
  //     image: pic1,
  //     heading: 'Fuchsia Rose NO:5013',
  //     subhead: 'Roses Fuchsia 1 piece 5 real',
  //     size: 'Height 15.0CM Width 25.0CM',
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  //   },
  // ];
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <SubHeader />
        <View>
          <SingleProdContent />
          {/* <FlatList
            data={singledata}
            keyExtractor={item => item.id}
            renderItem={({item}) => <SingleProdContent item={item} />}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleProduct;
