import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Pages/LoginPage';
import HomeScreen from './Pages/HomePage';
import { DisplayScreen1, DisplayScreen2, DisplayScreen3 } from './Pages/DisplayScreen';
import ProductDetailScreen from './Pages/ProductDescription';
import CameraScreen from './Pages/CameraScreen';
import ProfileScreen from './Pages/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Display1" component={DisplayScreen1} />
        <Stack.Screen name="Display2" component={DisplayScreen2} />
        <Stack.Screen name="Display3" component={DisplayScreen3} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
