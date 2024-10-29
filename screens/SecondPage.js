import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';

// Import images
import image1 from '../assets/2pgassets/edsa.jpg';
import image2 from '../assets/2pgassets/mass.jpg';
import image3 from '../assets/2pgassets/revolt.jpg';
import image4 from '../assets/2pgassets/mutiny.png';

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
          <Text style={styles.title}>Filipino History</Text>

          {/* Display images and their titles/creators vertically */}
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handleImagePress(image1, 'Edsa Revolution', 'a series of popular demonstrations in the Philippines, mostly in Metro Manila, from February 22 to 25, 1986.')}>
              <Image source={image1} style={[styles.image, { backgroundColor: 'black' }]} />
            </TouchableOpacity>
            <Text style={styles.imageTitle}>Edsa Revolution</Text>
            <Text style={styles.imageCreator}></Text>
          </View>

          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handleImagePress(image2, 'First Mass in the Philippines', ' Limasawa in Southern Leyte as the venue of the first Mass, held on March 31, 1521')}>
              <Image source={image2} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.imageTitle}>First Mass in Limasawa</Text>
            <Text style={styles.imageCreator}></Text>
          </View>

          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handleImagePress(image3, 'Philippine Revolution', 'Was a war of independence waged by the revolutionary organization Katipunan against the Spanish Empire from 1896 to 1898')}>
              <Image source={image3} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.imageTitle}>Philippine Revolution</Text>
            <Text style={styles.imageCreator}></Text>
          </View>

          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => handleImagePress(image4, '1872 Cavite mutiny', 'was an uprising of Filipino military personnel of Fort San Felipe, the Spanish arsenal in Cavite, Philippine Islands (then also known as part of the Spanish East Indies) on January 20, 1872.')}>
              <Image source={image4} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.imageTitle}>Cavite Mutiny</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Quicksand',
    marginTop: -100,
  },
  modalImageCreator: {
    fontSize: 16,
    color: 'white',
    marginTop: -5,
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
    fontFamily: 'Quicksand',
    backgroundColor: 'white',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20,
    color: 'black',
  },
  imageContainer: {
    marginBottom: 30, 
    alignItems: 'center', 
  },
  image: {
    width: 350, 
    height: 200, 
    resizeMode: 'cover', 
  },
  imageTitle: {
    fontSize: 20,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    marginTop: 10, 
    color: 'black',
    backgroundColor: '#fff'
  },
  imageCreator: {
    fontSize: 16,
    marginTop: 5, 
    color: 'gray', 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#fff',
    margin: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily:'PlayfairDisplay',
  },
});

export default SecondPage;
