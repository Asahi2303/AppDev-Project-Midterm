import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
// import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

function AboutUsScreen({ navigation }) {
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
        Maghatid ng pangkasaysayang impormasyon sa mga mag-aaral, sa kabataan,sa sangkaguruan at sa aming mga tagasubaybay.
        Muling ipaalam sa kanila ang kahalagahan ng kasaysayan at kung paano ito nakakatulong sa atin upang alamin ang ating nakaraan at ang ating pinagmulan..
        </Text>

        <Text style={styles.subTitle}>Bisyon</Text>
        <Text style={styles.content}>
        Ang site ay para sa pananaliksik sa pamamagitan ng paglalathala ng akdang pampanitikan sa loob at labas ng bansa para sa pag-aaral.
        </Text>

        <Text style={styles.subTitle}>Our Team</Text>
        
        {/* Images Section */}
        <View style={styles.imagesContainer}>
          <View style={styles.imageWithText}>
            <Image 
              source={require('../assets/abtuspictures/jay.jpg')} 
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.imageTitle}>Ejhay L. Sandoval</Text>
              <Text style={styles.imageSubtitle}>React Native Developer, Figma Designer</Text>
            </View>
          </View>
          <View style={styles.imageWithText}>
            <Image 
              source={require('../assets/abtuspictures/rox.jpg')} 
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.imageTitle}>Johncarlo B. Roxas</Text>
              <Text style={styles.imageSubtitle}>Figma Designer</Text>
            </View>
          </View>
          <View style={styles.imageWithText}>
            <Image 
              source={require('../assets/abtuspictures/vee.jpg')} 
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.imageTitle}>Jayvee Balcuba</Text>
              <Text style={styles.imageSubtitle}>Figma Designer</Text>
            </View>
          </View>
        </View>
        <View style={styles.imageWithText}>
            <Image 
              source={require('../assets/abtuspictures/mercy.jpg')} 
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.imageTitle}>Mercy Burdios</Text>
              <Text style={styles.imageSubtitle}>Content suggester</Text>
            </View>
          </View>
          <View style={styles.imageWithText}>
            <Image 
              source={require('../assets/abtuspictures/serante.jpg')} 
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.imageTitle}>Jennelyn Serante</Text>
              <Text style={styles.imageSubtitle}>.....</Text>
            </View>
          </View>
          <View style={styles.imageWithText}>
            <Image 
              source={require('../assets/abtuspictures/sicup.jpg')} 
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.imageTitle}>Jahleel Sicup</Text>
              <Text style={styles.imageSubtitle}>....</Text>
            </View>
          </View>

        <Text style={styles.subTitle}>Contact Us</Text>
        <Text style={styles.content}>
          Email: support@example.com
        </Text>
        <Text style={styles.content}>
          Follow us on social media for updates and news.
        </Text>
      </ScrollView>

      {/* Fixed Buttons Container at the Bottom */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondPage')}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 32,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  subTitle: {
    fontStyle: 'italic', 
    fontSize: 24,
    marginTop: 20,
    color: 'black',
    textAlign: 'left',
    width: '100%',
  },
  content: {
    color: 'gray',
    textAlign: 'left ',
    marginBottom: 20,
    lineHeight: 24, // Improved line height for readability
    width: '100%', // Full width for better layout
  },
  imagesContainer: {
    flexDirection: 'column', // Stack images and textboxes vertically
    alignItems: 'flex-start', // Align items to the left
    marginBottom: 20,
  },
  imageWithText: {
    flexDirection: 'row', // Align image and text horizontally
    alignItems: 'center', // Center items vertically
    marginBottom: 20, // Space between each image with text
  },
  image: {
    width: 100, // Adjust based on your image size
    height: 100, // Adjust based on your image size
    marginRight: 10, // Space between image and text
    borderRadius: 50
  },
  textContainer: {
    flex: 1, // Take up the remaining space
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageSubtitle: {
    fontSize: 16,
    color: 'black',
  },
  buttonsContainer: {
    position: '',
    bottom: 0 ,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '',
    borderTopWidth: 0,
    borderColor: '',
  },
  button: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AboutUsScreen;