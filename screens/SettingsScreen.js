import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function SettingsScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [privacyEnabled, setPrivacyEnabled] = useState(false);

  const handleSave = () => {
    // Basic validation for email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    // Here you would typically save the settings
    Alert.alert('Settings Saved', 'Your settings have been updated successfully.');
  };

  return (
    <ImageBackground
      source={require('../assets/APBCKG.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Update Your Profile</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="email"
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
          <Ionicons name="lock-closed" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Enable Notifications: </Text>
          <TouchableOpacity style={styles.switchButton} onPress={() => setNotificationsEnabled(!notificationsEnabled)}>
            <Text style={styles.switchText}>{notificationsEnabled ? 'ON' : 'OFF'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Privacy Mode: </Text>
          <TouchableOpacity style={styles.switchButton} onPress={() => setPrivacyEnabled(!privacyEnabled)}>
            <Text style={styles.switchText}>{privacyEnabled ? 'ON' : 'OFF'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.changePasswordButton} onPress={() => alert('Change Password Pressed')}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Settings</Text>
        </TouchableOpacity>

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
  subtitle:{
    fontSize: 15,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
 padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 8,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  switchButton: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 10,
  },
  switchText: {
    fontSize: 16,
    color: '#333',
  },
  changePasswordButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  button: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10,
    flex: 1,
    marginRight: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default SettingsScreen;