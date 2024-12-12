import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Adjust the path as necessary
import SignUpScreen from './screens/SignUpScreen'; // Adjust the path as necessary
import Dashboard from './screens/Dashboard';
import Setpin from './screens/Setpin';
import Direct from './screens/Direct';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Setpin" component={Setpin} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Direct" component={Direct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}