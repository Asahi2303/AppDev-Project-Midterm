import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

function SecondPage({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/APBCKG.png')} // Adjust the path as necessary
      style={styles.background}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Second Page</Text>
          <Text>Nice!</Text>
        </ScrollView>
      </View>

      {/* Fixed Buttons Container at the Bottom */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutUs')}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Log Out</Text>
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
  scrollContainer: {
    flexGrow: 1, // Allow the ScrollView to grow
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff', // Change text color for better visibility
  },
  buttonsContainer: {
    position: 'absolute', // Position the buttons container absolutely
    bottom: 0, // Align it to the bottom of the screen
    left: 0,
    right: 0,
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'space-around', // Space buttons evenly
    paddingVertical: 10, // Add vertical padding
  },
  button: {
    backgroundColor: 'black', // Light background for subtle effect
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 5, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: '#fff', // Border color
    width: '30%', // Set a width for the buttons to be consistent
    alignItems: 'center', // Center text inside the button
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16, // Font size
    textAlign: 'center', // Center text
  },
});

export default SecondPage;