import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomBox = ({ titulo, monto, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.amount}>{monto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 120,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  amount: {
    fontSize: 24,
    color: 'white',
  },
});

export default CustomBox;
