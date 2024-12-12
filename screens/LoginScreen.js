import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Import auth from your firebaseConfig

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in

  // Check if the user is already logged in when the component mounts
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        navigation.navigate('Setpin');
      } else {
        setIsLoggedIn(false);
      }
    });

    // Cleanup the subscription when the component unmounts
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    // Firebase Authentication login
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in:', user.email);
        setEmail('');
        setPassword('');
        navigation.navigate('Setpin');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Login Error', errorMessage);
        console.error('Error code:', errorCode, 'Error message:', errorMessage);
      });
  };

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>

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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.linkText} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white for better visibility
    borderRadius: 10,
    elevation: 5, // Optional: Add shadow effect
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Darker text color
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Lighter border color
    borderRadius: 5,
    backgroundColor: '#fff', // White background for inputs
  },
  button: {
    backgroundColor: 'black', // Bootstrap primary color
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
    color: '#666', // Gray color for footer text
    textAlign: 'center',
  },
  linkText: {
    color: '#007BFF', // Link color
    fontWeight: 'bold',
  },
});
