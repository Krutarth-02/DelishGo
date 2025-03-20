import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './OnboardingScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={OnboardingScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};