import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://sxxwomaefzwjeubrdgta.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY 

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);


const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert('Login Failed', error.message);
    } else {
      Alert.alert('Login Success', 'You have logged in successfully');
      onLogin(); // Call the onLogin function to proceed after successful login
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginForm;
