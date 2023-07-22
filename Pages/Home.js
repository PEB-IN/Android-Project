import {Image, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import mainimg from '../assets/image/Rectangle23.png';
import Categories from '../Components/Categories';
import Header from '../Components/Header/Header';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <Image source={mainimg} style={styles.main} />
        <Categories navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
});

export default Home;
