import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://sxxwomaefzwjeubrdgta.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4eHdvbWFlZnp3amV1YnJkZ3RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMDUzMDUsImV4cCI6MjA0MzY4MTMwNX0.V3x6vh8H_Tfg2JdeW3C6q6t8RWJZJ2Ongi_zM4IccKg');

const ProfileScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('users')
        .select('username, email, skinColor, picture')
        .eq('user_id', userId)
        .single();

      if (error) {
        Alert.alert('Error fetching profile', error.message);
      } else {
        setUser(data);
      }
      setLoading(false);
    };

    fetchUserProfile();
  }, [userId]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      navigation.replace('Login');
    }
  };

  if (loading) return <Text>Loading...</Text>;

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>No profile data found.</Text>
        <Text style={styles.promptText}>Please fill in your profile details to enhance your experience.</Text>
        <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile', { userId })} />
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: user.picture || 'https://www.example.com/default-profile.png' }} 
          style={styles.image} 
        />
        <Text style={styles.skinColor}>Skin Color: {user.skinColor}</Text>
        <Text style={styles.username}>Username: {user.username}</Text>
        <Text style={styles.email}>Email: {user.email}</Text>
        <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile', { userId })} />
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  card: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    width: '90%',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  skinColor: {
    fontSize: 18,
    textAlign: 'center',
  },
  username: {
    fontSize: 16,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
  },
  noDataText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  promptText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ProfileScreen;
