import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import pic3 from '../../assets/image/Rectangle32.png';
import {FlatList} from 'react-native-gesture-handler';

const SingleProdContent = () => {
  const Slidersimg = [
    require('../../assets/image/Rectangle32.png'),
    require('../../assets/image/Rectangle31.png'),
    require('../../assets/image/Rectangle30.png'),
  ];
  return (
    <View>
      <SliderBox
        images={Slidersimg}
        sliderBoxHeight={293}
        // style={styles.main}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
      />
      {/* <View>
        <Image source={item.image} style={styles.main} />

        <SliderBox
          images={pic3}
          sliderBoxHeight={400}
          style={styles.main}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
        />
      </View>
      <View>
        <Text>{item.heading}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // main: {
  //   width: '100%',
  //   height: 293,
  //   resizeMode: 'cover',
  // },
});

export default SingleProdContent;
