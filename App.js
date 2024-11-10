import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Pages/LoginPage';
import HomeScreen from './Pages/HomePage';
import { DisplayScreen1, DisplayScreen2, DisplayScreen3 } from './Pages/DisplayScreen';
import ProductDetailScreen from './Pages/ProductDescription';
import CameraScreen from './Pages/CameraScreen';
import ProfileScreen from './Pages/Profile';
import EditProfileScreen from './Pages/EditProfileScreen';

import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '@env';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const Stack = createStackNavigator();

const PinkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffe6f0',
    primary: '#ff85a2',    
  },
};

export default function App() {
  return (
    <NavigationContainer theme={PinkTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ff85a2', 
          },
          headerTintColor: '#ffffff', 
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerTitleAlign: 'center',
          cardStyle: {
            backgroundColor: '#ffe6f0', 
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login', headerShown: false }} 
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Display1" component={DisplayScreen1} options={{ title: 'Display 1' }} />
        <Stack.Screen name="Display2" component={DisplayScreen2} options={{ title: 'Display 2' }} />
        <Stack.Screen name="Display3" component={DisplayScreen3} options={{ title: 'Display 3' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Camera' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
