import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WholeSale from './Pages/WholeSale';
import Home from './Pages/Home';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import AppNavigator from './Components/Navigation/AppNavigator';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
      {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WholeSale" component={WholeSale} /> */}
      {/* <Stack.Screen name="SingleProduct" component={SingleProduct} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}
