// components/ContactCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ContactCardProps {
  name: string;
  onPress?: () => void;
}

export default function ContactCard({ name, onPress }: ContactCardProps) {
  return (
    <View style={styles.card} onTouchEnd={onPress}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 8,
    padding: 16,
    borderRadius: 5,
    elevation: 2,
  },
  name: {
    fontSize: 16,
  },
});
