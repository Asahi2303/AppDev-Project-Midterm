import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, ScrollView } from 'react-native';

function SecondPage({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')} // Adjust the path as necessary
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Second Page</Text>
          <Text>Nice!</Text>
          <Button title="Go to Settings" onPress={() => navigation.navigate('SettingsScreen')} />
          <Button title="About Us" onPress={() => navigation.navigate('AboutUs')} />
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Fill the entire screen
  },
  scrollContainer: {
    flexGrow: 1, // Allow the ScrollView to grow
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    opacity: 0.8, // Optional: to make the background slightly visible
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff', // Change text color for better visibility
  },
});

export default SecondPage;