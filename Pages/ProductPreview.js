import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductPreview = ({ products }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.arrow}>→</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    textAlign: 'center',
  },
  arrow: {
    fontSize: 24,
    marginLeft: 10,
  },
});

export default ProductPreview;

