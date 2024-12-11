import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Navigate to the SecondPage after clicking Login
    navigation.navigate("SecondPage");
  };

  return (
    <ImageBackground
      // source={require('../assets/APBCKG.jpg')} // Uncomment and replace with your background image if needed
      style={styles.background}
    >
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
          Don't have an account? <Text style={styles.linkText} onPress={() => navigation.navigate("SignUp")}>Sign Up</Text>
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
    backgroundColor: '#007BFF', // Bootstrap primary color
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