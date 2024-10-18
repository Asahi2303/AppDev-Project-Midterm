import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SignUpScreen() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Example: Simple sign-up check
    if (firstName && lastName && username && password) {
      Alert.alert('Sign Up Successful');
      navigation.navigate('Login'); // Navigate back to Login screen after sign up
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/AP2.png')} // Adjust the path as necessary
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.textBox}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.textBox}
          placeholder="Middle Name"
          value={middleName}
          onChangeText={setMiddleName}
        />
        <TextInput
          style={styles.textBox}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
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
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
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
    justifyContent: 'center', // Center the button
    width: '100%', // Make it responsive
  },
  button: {
    backgroundColor: 'black', // Light background for subtle effect
    paddingVertical: 13, // Vertical padding
    paddingHorizontal: 22, // Horizontal padding
    borderRadius: 5, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: '#fff', // Border color
    alignItems: 'center', // Center text inside the button
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16, // Font size
    textAlign: 'center', // Center text
  },
});

export default SignUpScreen;