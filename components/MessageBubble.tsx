// components/MessageBubble.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageBubbleProps {
  text: string;
  isSender?: boolean;
}

export default function MessageBubble({ text, isSender }: MessageBubbleProps) {
  return (
    <View style={[styles.bubble, isSender ? styles.sender : styles.receiver]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    margin: 8,
    padding: 10,
    borderRadius: 8,
  },
  sender: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  receiver: {
    backgroundColor: '#ECE5DD',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 15,
  },
});
