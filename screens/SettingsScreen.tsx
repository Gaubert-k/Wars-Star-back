// screens/SettingsScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SettingsScreen() {
  // TODO: Changer la couleur de l’en-tête, activer multilingue...
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Paramètres (changement de thème, langue, etc.)</Text>
      <Button title="Changer couleur d'en-tête" onPress={() => {}} />
    </View>
  );
}
