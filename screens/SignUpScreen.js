import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Alert, ImageBackground } from 'react-native';
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
      source={require('./assets/background.jpg')} // Adjust the path as necessary
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
          <View style={styles.buttonWrapper}>
            <Button title="Sign Up" onPress={handleSignUp} />
          </View>
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
    width: '80%', // Make it responsive
  },
  buttonWrapper: {
    flex: 1, // Allow button to take equal space
    marginHorizontal: 5, // Add some horizontal margin between buttons
    borderRadius: 5, // Optional: for rounded corners
    overflow: 'hidden', // Clip the button to the border radius
    backgroundColor: 'white', // Example background color for the button container
  },
});

export default SignUpScreen;