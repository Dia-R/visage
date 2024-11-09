import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://sxxwomaefzwjeubrdgta.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4eHdvbWFlZnp3amV1YnJkZ3RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMDUzMDUsImV4cCI6MjA0MzY4MTMwNX0.V3x6vh8H_Tfg2JdeW3C6q6t8RWJZJ2Ongi_zM4IccKg');

const EditProfileScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [skinColor, setSkinColor] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data, error } = await supabase
        .from('users')
        .select('username, email, skinColor, picture')
        .eq('user_id', userId)
        .single();

      if (error) {
        Alert.alert('Error fetching profile', error.message);
      } else {
        setUsername(data.username);
        setEmail(data.email);
        setSkinColor(data.skinColor);
        setPicture(data.picture);
      }
    };

    fetchUserProfile();
  }, [userId]);

  const handleSaveProfile = async () => {
    const { error } = await supabase
      .from('users')
      .update({ username, email, skinColor, picture })
      .eq('user_id', userId);

    if (error) {
      Alert.alert('Error updating profile', error.message);
    } else {
      Alert.alert('Profile updated successfully');
      navigation.goBack(); // Go back to the Profile screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Skin Color"
        value={skinColor}
        onChangeText={setSkinColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Profile Picture URL"
        value={picture}
        onChangeText={setPicture}
      />

      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingLeft: 8,
    width: '100%',
  },
});

export default EditProfileScreen;
