import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Button, TextInput, Alert, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import SecondPage from './screens/SecondPage';
import AboutUsScreen from './screens/AboutUsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (navigation) => {
    if (username === 'admin' && password === 'password') {
      navigation.navigate('SecondPage');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  const handleSignUp = (navigation) => {
    navigation.navigate('SignUp');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login">
          {({ navigation }) => (
            <ImageBackground
              source={require('./assets/AP.png')} // Ensure this path is correct
              style={styles.background}
            >
              <View style={styles.container}>
                <View style={styles.logoContainer}>
                  <Image
                    source={require('./assets/cdmlogo.png')}
                    style={styles.logo}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput
                      style={styles.textBox}
                      placeholder="Username"
                      value={username}
                      onChangeText={setUsername}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={24} color="black" />
                    <TextInput
                      style={styles.textBox}
                      placeholder="Password"
                      secureTextEntry={true}
                      value={password}
                      onChangeText={setPassword}
                    />
                  </View>
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
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{ headerShown: false }} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
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
    opacity: 0.8,
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    width: 350,
    paddingHorizontal: 10,
    elevation: 2, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  textBox: {
    height: 40,
    flex:  1,
    marginLeft: 10,
    color: 'black',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
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