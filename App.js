import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Button, TextInput, Alert, ImageBackground } from 'react-native';
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
          {({ navigation }) => ( // Pass navigation prop here
            <ImageBackground
              source={require('./assets/background.jpg')} // Ensure this path is correct
              style={styles.background}
            >
              <View style={styles.container}>
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
                <View style={styles.buttonContainer}>
                  <View style={styles.buttonWrapper}>
                    <Button title="Login" onPress={() => handleLogin(navigation)} />
                  </View>
                  <View style={styles.buttonWrapper}>
                    <Button title="Sign Up" onPress={() => handleSignUp(navigation)} />
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
  textBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '80%', // Make it responsive
    backgroundColor: '#fff', // White background for text input
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'space-between', // Space out buttons
    width: '80%', // Make it responsive
  },
  buttonWrapper: {
    flex: 1, // Allow buttons to take equal space
    marginHorizontal: 5, // Add some horizontal margin between buttons
    borderRadius: 5, // Optional: for rounded corners
    overflow: 'hidden', // Clip the button to the border radius
    backgroundColor: 'white', // Example background color for the button container
  },
});