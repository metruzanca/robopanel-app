import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// required for react native
// import {} from 'styled-components/cssprop'

// TODO setup theme provider for styled-components

import LoginScreen from './screens/LoginScreen'

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation /> */}
        <LoginScreen />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
