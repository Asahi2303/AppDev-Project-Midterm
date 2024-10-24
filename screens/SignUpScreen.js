import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

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
        <Text style={styles.title}>Create Account</Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput
            style={styles.textBox}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput
            style={styles.textBox}
            placeholder="Middle Name"
            value={middleName}
            onChangeText={setMiddleName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput
            style={styles.textBox}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person-circle" size={24} color="black" />
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
    opacity: 0.9, // Optional: to make the background slightly visible
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
    elevation: 2, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  textBox: {
    height: 40,
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,

 },
  buttonText: {
    fontSize: 18,
    color: 'blue',
    fontWeight: '',
  },
});

export default SignUpScreen;