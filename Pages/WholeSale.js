import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import WholeSaleHead from '../Components/WholeSale/WholeSaleHead';
import BuyProduct from './BuyProduct';
import Header from '../Components/Header/Header';
import SubHeader from '../Components/Header/SubHeader';

const WholeSale = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <SubHeader />
        <View>
          <WholeSaleHead />
          <TouchableOpacity style={styles.btnhead}>
            <View
              style={{
                backgroundColor: '#F6F7F9',
                marginTop: 10,
                width: 358,
              }}>
              <Text style={styles.textbtn}>All</Text>
            </View>
          </TouchableOpacity>
          <BuyProduct />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnhead: {
    alignItems: 'center',
  },

  textbtn: {
    textAlign: 'center',
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});

export default WholeSale;
