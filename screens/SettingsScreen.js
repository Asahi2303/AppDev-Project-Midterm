import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

function SettingsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/APBCKG.png')} // Ensure the path is correct
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Title wrapped in Text component */}
        <Text style={styles.title}>Settings</Text>
        {/* Content wrapped in Text component */}
        <Text style={styles.content}>Settings page content goes here.</Text>
      </View>

      {/* Fixed Buttons Container at the Bottom */}
      <View style={styles.buttonsContainer}>
        {/* Custom TouchableOpacity button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondPage')}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Fill the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff', // Change text color for better visibility
  },
  content: {
    color: '#fff', // Change text color for better visibility
    textAlign: 'center',
    marginBottom: 20, // Add some margin for spacing
  },
  buttonsContainer: {
    position: 'absolute', // Position the buttons container absolutely
    bottom: 0, // Align it to the bottom of the screen
    left: 0,
    right: 0,
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'center', // Center the button
    paddingVertical: 20, // Add vertical padding
  },
  button: {
    backgroundColor: 'black', // Light background for subtle effect
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 5, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: '#fff', // Border color
  },
  buttonText: {
    color: 'white', // Text color
    fontSize: 16, // Font size
    textAlign: 'center', // Center text
  },
});

export default SettingsScreen;