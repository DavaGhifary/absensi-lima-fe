import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './src/screens/onBoarding';
import LoginScreens from './src/screens/Masuk';
import Daftar from './src/screens/Daftar';
import AwalScreen from './src/screens/AwalScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Masuk"
          component={LoginScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Daftar"
          component={Daftar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AwalScreen"
          component={AwalScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
