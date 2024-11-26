import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, ImageBackground, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig.js";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

function SignUpScreen() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState(''); // Combined name state
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Added email state
  const [password, setPassword] = useState('');
  const [confirmpassword, confirmPassword] = useState('');

  const isFormValid = () =>
    email.includes("@") && password === confirmpassword && password.length >= 8; // Fixed variable name

  const handleSignup = async () => { // Changed to handleSignup
    if (!isFormValid()) {
      Alert.alert(
        "Try again",
        "Please enter a valid email and matching passwords with at least 8 characters"
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password); // Ensure auth is defined
      Alert.alert("Success", "Account created successfully");
      setEmail(""); // Reset email
      setPassword("");
      confirmPassword(""); // Corrected function call
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", `Error creating user: ${error.message}`);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/APBCKG2.jpg')} // Adjust the path as necessary
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput
            style={styles.textBox}
            placeholder="Full Name"
            value={fullName} // Changed to fullName state
            onChangeText={setFullName} // Updated to setFullName
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={24} color="black" />
          <TextInput
            style={styles.textBox}
            placeholder="Email"
            value={email} // Changed to email state
            onChangeText={setEmail} // Updated to setEmail
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
        
        <View style={styles.inputContainer}>
          <Ionicons name="lock-open" size={24} color="black" />
          <TextInput
            style={styles.textBox}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmpassword}
            onChangeText={confirmPassword}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
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
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
  },
  textBox: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default SignUpScreen;