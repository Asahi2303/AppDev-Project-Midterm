import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install this package

function SettingsScreen({ navigation }) {
  // State variables for user information
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ImageBackground
      source={require('../assets/APBCKG.png')} // Ensure the path is correct
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Settings</Text>

        {/* Text Inputs for User Information */}
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#ccc"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person-circle" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#ccc"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Change Password Button */}
        <TouchableOpacity style={styles.changePasswordButton} onPress={() => alert('Change Password Pressed')}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        {/* Fixed Buttons Container at the Bottom */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondPage')}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
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
  input: {
    height: 40,
    flex: 1,
    marginLeft: 10,
    color: 'black',
  },
  changePasswordButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default SettingsScreen;