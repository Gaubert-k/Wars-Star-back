
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ContactFormScreen from './screens/ContactFormScreen';
import SettingsScreen from './screens/SettingsScreen';

import { ContactsProvider } from './contexts/ContactsContext';  
import './i18n'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <ContactsProvider children={undefined}>
      <NavigationContainer children={undefined}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="ContactForm" component={ContactFormScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactsProvider>
  );
}
