import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductPreview from './ProductPreview';
import { Camera } from 'expo-camera';
import { tailwind } from 'tailwind-rn';


const products = [
  { id: '1', name: 'Product 1', image: 'https://via.placeholder.com/100', description: 'This is the description of Product 1.' },
  { id: '2', name: 'Product 2', image: 'https://via.placeholder.com/100', description: 'This is the description of Product 2.' },
  { id: '3', name: 'Product 3', image: 'https://via.placeholder.com/100', description: 'This is the description of Product 3.' },
];

const user = {
  picture: 'https://via.placeholder.com/150',
  skinColor: 'Light',
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const openCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      navigation.navigate('Camera');
    } else {
      alert('Camera permission is required to use this feature.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displays}>
        <TouchableOpacity onPress={() => navigation.navigate('Display1')} style={styles.display}>
          <Text style={styles.displayText}>Display 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Display2')} style={styles.display}>
          <Text style={styles.displayText}>Display 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Display3')} style={styles.display}>
          <Text style={styles.displayText}>Display 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.products}>
        <ProductPreview products={products} />
      </View>
      <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
        <Text style={styles.cameraButtonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile', { user })}
      >
        <Text style={styles.profileButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  displays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  display: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 10,
  },
  displayText: {
    fontSize: 18,
  },
  products: {
    flex: 1,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  cameraButtonText: {
    fontSize: 24,
    color: 'black',
  },
  profileButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
  },
  profileButtonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default HomeScreen;


