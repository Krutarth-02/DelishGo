import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './HomeScreen';
import Onboard from './OnboardingScreen';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        /> */}
        <Stack.Screen name="Onboarding" component={Onboard} options={{title: 'Home'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};