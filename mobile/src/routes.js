import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode='none'
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}>
        <AppStack.Screen name='Profile' component={Profile} />
        <AppStack.Screen name='ForgotPassword' component={ForgotPassword} />
        <AppStack.Screen name='Home' component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
