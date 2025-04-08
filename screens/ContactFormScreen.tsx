// screens/ContactFormScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useContacts } from '../contexts/ContactsContext';

export default function ContactFormScreen() {
  const { addContact } = useContacts();
  const [contactName, setContactName] = useState('');

  const handleSave = () => {
    addContact({ id: Date.now().toString(), name: contactName });
    // navigation.goBack() ou autre
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Ajouter / Modifier un contact</Text>
      <TextInput 
        value={contactName} 
        onChangeText={setContactName} 
        placeholder="Nom du contact" 
        style={{ borderWidth: 1, marginVertical: 10 }}
      />
      <Button title="Enregistrer" onPress={handleSave} />
    </View>
  );
}
