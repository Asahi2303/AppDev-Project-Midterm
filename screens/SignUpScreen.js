import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Assuming you are exporting auth from the Firebase config

function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Check if email and password are provided
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    // Create user with Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful signup
        const user = userCredential.user;
        console.log('User registered:', user.email);
        // Reset fields after "signup"
        setEmail('');
        setPassword('');
        // Optionally, navigate to another screen
        // navigation.navigate('Home'); // Or wherever you want to go after successful signup
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Signup Error', errorMessage);
        console.error('Error code:', errorCode, 'Error message:', errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
          Log In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    color: '#666',
  },
  linkText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
