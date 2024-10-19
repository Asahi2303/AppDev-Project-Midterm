import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';

// Import images
import image1 from '../assets/2pgassets/1.jpg';
import image2 from '../assets/2pgassets/2.jpg';
import image3 from '../assets/2pgassets/3.jpg';
import image4 from '../assets/2pgassets/4.jpg';

function SecondPage({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/APBCKG.png')} // Adjust the path as necessary
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Famous Filipino Artworks</Text>

          {/* Display images and their titles/creators vertically */}
          <View style={styles.imageContainer}>
      <Image source={image1} style={[styles.image, { backgroundColor: 'black' }]} />
      <Text style={styles.imageTitle}>Planting RIce</Text>
      <Text style={styles.imageCreator}>By Fernando Amorsolo</Text>
      </View>

          <View style={styles.imageContainer}>
            <Image source={image2} style={styles.image} />
            <Text style={styles.imageTitle}>Spoliarium </Text>
            <Text style={styles.imageCreator}>By Juan Luna</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={image3} style={styles.image} />
            <Text style={styles.imageTitle}>Las Virgenes Cristianas Expuestas al Populacho</Text>
            <Text style={styles.imageCreator}>By Félix Resurreccion Hidalgo</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={image4} style={styles.image} />
            <Text style={styles.imageTitle}>Fruit Gatherer</Text>
            <Text style={styles.imageCreator}>By Fernando Amorsolo</Text>
          </View>

          {/* Buttons at the bottom */}
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
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  scrollContainer: {
    paddingBottom: 100, // Add padding to prevent content being cut off at the bottom
  },
  title: {
    fontStyle: 'italic',
    fontFamily: 'arial',
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  imageContainer: {
    marginBottom: 30, // Space between image sections
    alignItems: 'center', // Center align text below images
  },
  image: {
    width: 350, // Adjust width as needed
    height: 200, // Set height for the images
    resizeMode: 'cover', // Adjust how the image should be resized
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10, // Space between image and title
    color: 'black',
  },
  imageCreator: {
    fontSize: 16,
    marginTop: 5, // Space between title and
    color: 'gray', // Different color for the creator's name
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SecondPage;