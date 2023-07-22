import {View, FlatList} from 'react-native';
import React from 'react';
import pic1 from '../../assets/image/Rectangle30.png';
import logo from '../../assets/image/logo.png';
import WholeSaleContent from './WholeSaleContent';

const WholeSaleHead = () => {
  const Displayimg = [
    {
      image: pic1,
      heading: 'All',
    },
    {
      image: logo,
      heading: 'Rose',
    },
    {
      image: logo,
      heading: 'Baby Rose',
    },
    {
      image: logo,
      heading: 'Tulip',
    },
    {
      image: logo,
      heading: 'Lily',
    },
    {
      image: logo,
      heading: 'Malli',
    },
    {
      image: logo,
      heading: 'Malli',
    },
    {
      image: logo,
      heading: 'Malli',
    },
    {
      image: logo,
      heading: 'Malli',
    },
  ];
  return (
    <View>
      <FlatList
        data={Displayimg}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item}) => <WholeSaleContent item={item} />}
      />
    </View>
  );
};

export default WholeSaleHead;
