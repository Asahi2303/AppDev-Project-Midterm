import React, { useState } from 'react'; // Import useState
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';

function AboutUsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [selectedImageTitle, setSelectedImageTitle] = useState(''); // State for selected image title

  return (
    <ImageBackground
      source={require('../assets/APBCKG.png')} // Ensure the path is correct
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>About Us</Text>

        <Text style={styles.content}>
          Ang application na ito ay maglalaman ng mga likhang sining na may kaugnayan sa mga paksang may kaugnayan sa kasaysayan, heograpiya, ekonomiya, at sa mga isyung panlipunan sa loob at labas ng Pilipinas.
        </Text>

        <Text style={styles.subTitle}>Misyon</Text>
        <Text style={styles.content}>
          Maghatid ng pangkasaysayan impormasyon sa mga mag-aaral, sa kabataan, sa sangguroan at sa aming mga tagasubaybay. Muling ipaalam sa kanila ang kahalagahan ng kasaysayan at kung paano ito nakakatulong sa atin upang alamin ang ating nakaraan at ang ating pinagmulan.
        </Text>

        <Text style={styles.subTitle}>Bisyon</Text>
        <Text style={styles.content}>
          Ang site ay para sa pananaliksik sa pamamagitan ng paglalathala ng akdang pampanitikan sa loob at labas ng bansa para sa pag-aaral.
        </Text>

        <Text style={styles.subTitle}>Our Team</Text>
        
        {/* Images Section */}
        <View style={styles.imagesContainer}>
          {teamMembers.map(member => (
            <View style={styles.imageWithText} key={member.name}>
              <TouchableOpacity onPress={() => { 
                  setSelectedImage(member.image); 
                  setSelectedImageTitle(member.description); // Set to custom description
                  setModalVisible(true); 
              }}>
                <Image 
                  source={member.image} 
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <Text style={styles.imageTitle}>{member.name}</Text>
                <Text style={styles.imageSubtitle}>{member.role}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.subTitle}>Contact Us</Text>
        <Text style={styles.content}>
          Email: support@example.com
        </Text>
        <Text style={styles.content}>
          Follow us on social media for updates and news.
        </Text>

        {/* Modal for zoomed image */}
        <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Image source={selectedImage} style={styles.zoomedImage} />
            <Text style={styles.imageDescription}>{selectedImageTitle}</Text>
            <TouchableOpacity style={styles.backButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </Modal>

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

const teamMembers = [
  {
    name: 'Johncarlo B. Roxas',
    role: 'Leader',
    image: require('../assets/abtuspictures/rox.jpg'),
    description: 'He helped Jayvee Balcuba to create and develop the design on Figma',
  },
  {
    name: 'Ejhay L. Sandoval',
    role: 'React Native Developer, Figma Designer',
    image: require('../assets/abtuspictures/jay.jpg'),
    description: 'React native Front end developer and Figma designer for group 7. ',
  },
  
  {
    name: 'Jayvee Balcuba',
    role: 'Figma Designer',
    image: require('../assets/abtuspictures/vee.jpg'),
    description: 'Figma designer for group 7.',
 },
  {
    name: 'Mercy Burdios',
    role: 'Content suggester',
    image: require('../assets/abtuspictures/mercy.jpg'),
    description: 'Figma designer for group 7.',
  },
  {
    name: 'Jennelyn Serante',
    role: '.....',
    image: require('../assets/abtuspictures/serante.jpg'),
    description: 'Figma designer for group 7.',
  },
  {
    name: 'Jahleel Sicup',
    role: '....',
    image: require('../assets/abtuspictures/sicup.jpg'),
    description: 'Figma designer for group 7.',
  },
];

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
  title: {
    fontSize: 32,
    marginTop: 20,
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'PlayfairDisplay',
  },
  subTitle: {
    fontFamily: 'PlayfairDisplay',
    fontSize: 24,
    marginTop: 20,
    color: '#34495e',
    textAlign: 'left',
    width: '100%',
  },
  content: {
    fontFamily:'PlayfairDisplay',
    color: '#7f8c8d',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'justify',
    backgroundColor: 'white',
  },
  imagesContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 0,
    width: '100%',
  },
  imageWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'white',
    opacity: '50%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imageTitle: {
    fontFamily: 'PlayfairDisplayitalic',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  imageSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  zoomedImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  imageDescription: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  buttonsContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 1,
    borderColor: '#ddd',
    borderWidth: 2,
    paddingVertical: 10, // Reduced padding for smaller button
    paddingHorizontal: 20, // Reduced padding for smaller button
    borderRadius: 5, // Smaller border radius for a better look
    alignSelf: 'center', // Center the button horizontally
  },
  buttonText: {
    fontSize: 16, // Smaller font size
    color: 'black',
    textAlign: 'center',
  },
});

export default AboutUsScreen;