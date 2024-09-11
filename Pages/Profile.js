import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture }} style={styles.image} />
      <Text style={styles.skinColor}>Skin Color: {user.skinColor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
});

export default ProfileScreen;
