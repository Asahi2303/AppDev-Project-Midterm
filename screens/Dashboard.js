import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { get, ref, set } from 'firebase/database';
import { auth, rtdb } from '../firebaseConfig';

export default function Dashboard({ navigation }) {
  const [pin, setPin] = useState('');
  const [pinEntered, setPinEntered] = useState(false);

  // Handle keypress to update PIN
  const handleKeyPress = (number) => {
    if (pin.length > 3) {
      alert("Your Pin is already set");
      return;
    }

    if (!pinEntered) {
      setPin(pin + number);
    }
  };

  // Handle reset to clear the PIN
  const handleReset = () => {
    setPin('');
    setPinEntered(false);
  };

  // Handle backspace
  const handleRemove = () => {
    setPin(pin.slice(0, -1));
  };

  const handleUnlock = () =>{
     // Fetch the user's PIN from the database when the component loads
      const userId = auth.currentUser?.uid;
      
      if (userId) {
        // Reference to the user's PIN
        const pinRef = ref(rtdb, `/pin/${userId}`);

      
        get(pinRef)
          .then(snapshot => {
            if (snapshot.exists()) {
               const fetchedPin = snapshot.val();  
               
                if(pin === fetchedPin){
                  //set lock to false
                    set(ref(rtdb, '/lock'), true)
                      .then(() => {
                        setPin('');
                        setPinEntered(true);
                        alert('You can now pressed the button to unlock')
                      })
                      .catch((error) => {
                        console.error('Error locking :', error);
                        setPin('');
                        setPinEntered(true);
                        alert("There was an error locking.");
                      });
                }

            
            } else {
              console.log("No PIN found for this user.");
            }
          })
          .catch((error) => {
            console.error("Error fetching user PIN: ", error);
          });
      }
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter PIN</Text>
      <View style={styles.pinIndicator}>
        {Array.from({ length: 4 }, (_, index) => (
          <Text key={index} style={[styles.pinText, { color: index < pin.length ? 'black' : 'gray' }]}>
            {index < pin.length ? pin[index] : '*'}
          </Text>
        ))}
      </View>
      <View style={styles.keypad}>
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Array.from({ length: 3 }, (_, colIndex) => {
              const number = rowIndex * 3 + colIndex + 1;
              return (
                <TouchableOpacity
                  key={number}
                  style={styles.key}
                  onPress={() => handleKeyPress(number.toString())}
                >
                  <Text style={styles.keyText}>{number}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.key}
            onPress={handleReset}
          >
            <Text style={styles.keyText}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.key}
            onPress={() => handleKeyPress('0')}
          >
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.key}
            onPress={handleRemove}
          >
            <Text style={styles.keyText}>⬅️</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Centering the buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Direct')}>
          <Text style={styles.buttonText}>Direct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Setpin')}>
          <Text style={styles.buttonText}>Set Pin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleUnlock}>
          <Text style={styles.buttonText}>Unlock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  keypad: {
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  keyText: {
    fontSize: 40,
    color: 'white',
  },
  // Styles for buttons
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons vertically
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Add space between keypad and buttons
  },
  button: {
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 5,
    marginVertical: 10, // Add vertical spacing between buttons
    width: 90, // Make buttons wider
    alignItems: 'center', // Center the text inside the button
    margin: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  pinIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
    marginBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderTopColor: 'black',
    borderTopWidth: 2,
  },
  pinText: {
    fontSize: 40,
  },
});
