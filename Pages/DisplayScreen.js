import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DisplayScreen1 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Display Screen 1</Text>
  </View>
);

const DisplayScreen2 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Display Screen 2</Text>
  </View>
);

const DisplayScreen3 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Display Screen 3</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default { DisplayScreen1, DisplayScreen2, DisplayScreen3 };
