import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, TextInput, Alert, ImageBackground, Image} from 'react-native'; // Import Text
import { signInWithEmailAndPassword } from "firebase/auth";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { useFonts } from 'expo-font';
import { auth } from "../firebaseConfig.js";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    'Quicksand': require('../assets/fonts/Quicksand.ttf'),
    'Lora': require('../assets/fonts/Lora.ttf'),
    'Loraitalic': require('../assets/fonts/Loraitalic.ttf'),
    'PlayfairDisplay': require('../assets/fonts/PlayfairDisplay.ttf'),
    'PlayfairDisplayitalic': require('../assets/fonts/PlayfairDisplayita.ttf'), 
  });

  useEffect(() => {
    if (!fontsLoaded) {
      return null; 
    }
  }, [fontsLoaded]);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User  logged in successfully:", user);
        navigation.navigate("SecondPage");
      })
      .catch((error) => {
        Alert.alert("Error", "Invalid credentials");
        console.error("Login error:", error);
      });
  };

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <ImageBackground
      source={require('../assets/APBCKG.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/cdmlogo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="mail" size={24} color="black" marginRight={5} />
            <TextInput
              style={styles.textBox}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={24} color="black" marginRight={5}/>
            <TextInput
              style={styles.textBox}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.buttonsRow}>
            <View style={styles.buttonWrapper}>
              <Button title="Login" onPress={handleLogin} />
            </View>
            <View style={styles.buttonWrapper}>
              <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    opacity: 0.8,
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textBox: {
    flex: 1,
    paddingHorizontal:  10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'Quicksand',
    color: 'black',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonWrapper: {
    paddingHorizontal: 10,
  },
});7