import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';

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
              <Image 
                source={member.image} 
                style={styles.image}
              />
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
    name: 'Ejhay L. Sandoval',
    role: 'React Native Developer, Figma Designer',
    image: require('../assets/abtuspictures/jay.jpg'),
  },
  {
    name: 'Johncarlo B. Roxas',
    role: 'Figma Designer',
    image: require('../assets/abtuspictures/rox.jpg'),
  },
  {
    name: 'Jayvee Balcuba',
    role: 'Figma Designer',
    image: require('../assets/abtuspictures/vee.jpg'),
  },
  {
    name: 'Mercy Burdios',
    role: 'Content suggester',
    image: require('../assets/abtuspictures/mercy.jpg'),
  },
  {
    name: 'Jennelyn Serante',
    role: '.....',
    image: require('../assets/abtuspictures/serante.jpg'),
  },
  {
    name: 'Jahleel Sicup',
    role: '....',
    image: require('../assets/abtuspictures/sicup.jpg'),
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
  },
  subTitle: {
    fontStyle: 'italic',
    fontSize: 24,
    marginTop: 20,
    color: '#34495e',
    textAlign: 'left',
    width: '100%',
  },
  content: {
    color: '#7f8c8d',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'justify',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  imageSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
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