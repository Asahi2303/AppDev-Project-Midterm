import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Button, TextInput, Alert, ImageBackground, Image } from 'react-native';
import SecondPage from './screens/SecondPage';
import AboutUsScreen from './screens/AboutUsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (navigation) => {
    // Example: Simple login check
    if (username === 'admin' && password === 'password') {
      // Navigate to Second Page on successful login
      navigation.navigate('SecondPage');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  const handleSignUp = (navigation) => {
    // Navigate to Sign Up screen
    navigation.navigate('SignUp');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {({ navigation }) => (
            <ImageBackground
              source={require('./assets/AP.png')} // Ensure this path is correct
              style={styles.background}
            >
              <View style={styles.container}>
                {/* Logo Container with Left Logo Only */}
                <View style={styles.logoContainer}>
                  <Image
                    source={require('./assets/cdmlogo.png')}
                    style={styles.logo}
                  />
                  {/* Removed the second logo */}
                </View>
                <View style={styles.contentContainer}>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                  />
                  <TextInput
                    style={styles.textBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                  {/* Buttons Row */}
                  <View style={styles.buttonsRow}>
                    <View style={styles.buttonWrapper}>
                      <Button title="Login" onPress={() => handleLogin(navigation)} />
                    </View>
                    <View style={styles.buttonWrapper}>
                      <Button title="Sign Up" onPress={() => handleSignUp(navigation)} />
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          )}
        </Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    opacity: 0.8, // Optional: to make the background slightly visible
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    flexDirection: 'row', // Align logos in a row
    justifyContent: 'space-between', // Space logos to the edges
    alignItems: 'center', // Center logos vertically
    paddingHorizontal: 20, // Add horizontal padding
  },
  logo: {
    width: 100, // Set width for logos
    height: 100, // Set height for logos (make sure both logos are the same size)
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  textBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: 350, // Make it responsive
    borderRadius: 10,
    backgroundColor: '#fff', // White background for text input
  },
  buttonsRow: {
    flexDirection: 'row', // Set the direction to row
    justifyContent: 'space-between', // Space buttons evenly
    alignItems: 'center', // Center buttons vertically
  },
  buttonWrapper: {
    flex: 1, // Allow buttons to take equal space
    padding: 4, // Add some padding
    backgroundColor: '#fff', // White background for individual buttons
    borderRadius: 10, // Add a rounded corner
    borderColor: '#ddd', // Light gray border
    borderWidth: 1, // Add a border
    height: 50, // Define a specific height for the button wrapper
    width: 50, // Set a specific width for the button wrapper
  },
});