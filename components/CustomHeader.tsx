// components/CustomHeader.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomHeader() {
  // Tu pourras ajouter un menu pour changer la couleur, etc.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IPSSI WhatsApp Clone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#075E54',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});
