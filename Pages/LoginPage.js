import React from 'react';
import { View } from 'react-native';
import LoginForm from './LoginCredentialCheck';

const LoginScreen = ({ navigation }) => {
  const handleLoginSuccess = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1 }}>
      <LoginForm onLogin={handleLoginSuccess} />
    </View>
  );
};

export default LoginScreen;
