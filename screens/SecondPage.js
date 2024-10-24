import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';

// Import images
import image1 from '../assets/2pgassets/1.jpg';
import image2 from '../assets/2pgassets/2.jpg';
import image3 from '../assets/2pgassets/3.jpg';
import image4 from '../assets/2pgassets/4.jpg';

function SecondPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState('');
  const [selectedImageCreator, setSelectedImageCreator] = useState('');

  const handleImagePress = (image, title, creator) => {
    setSelectedImage(image);
    setSelectedImageTitle(title);
    setSelectedImageCreator(creator);
    setModalVisible(true);
  };

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
            <TouchableOpacity onPress={() => handleImagePress(image1, 'Planting Rice', 'By Fernando Amorsolo')}>
              <Image source={image1} style={[styles.image, { backgroundColor: 'black' }]} />
            </TouchableOpacity>
            <Text style={styles.imageTitle}>Planting Rice</Text>
            <Text style={styles.imageCreator}></Text>
          </View>

          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handleImagePress(image2, 'Spoliarium', 'By Juan Luna')}>
              <Image source={image2} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.imageTitle}>Spoliarium </Text>
            <Text style={styles.imageCreator}></Text>
          </View>

          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handleImagePress(image3, 'Las Virgenes Cristianas Expuestas al Populacho', 'By Félix Resurreccion Hidalgo')}>
              <Image source={image3} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.imageTitle}>Las Virgenes Cristianas Expuestas al Populacho</Text>
            <Text style={styles.imageCreator}></Text>
          </View>

          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handleImagePress(image4, 'Fruit Gatherer', 'By Fernando Amorsolo')}>
              <Image source={image4} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.imageTitle}>Fruit Gatherer</Text>
            <Text style={styles.imageCreator}></Text>
          </View>

          {/* Modal for zoomed image */}
          <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <Image source={selectedImage} style={styles.modalImage} />
              <Text style={styles.modalImageTitle}>{selectedImageTitle}</Text>
              <Text style={styles.modalImageCreator}>{selectedImageCreator}</Text>
              <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>

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
  // ... existing styles ...
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba( 0, 0, 0, 0.5)',
  },
  modalImage: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  modalImageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  modalImageCreator: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  modalCloseButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: 'black',
  },

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
    marginTop: 20,
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