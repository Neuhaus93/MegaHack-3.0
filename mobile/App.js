import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </>
  );
}
