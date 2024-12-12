import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { getDatabase, ref, set } from 'firebase/database';
import { auth, rtdb } from '../firebaseConfig';

export default function Setpin({ navigation }) {
  const [pin, setPin] = useState('');
  const [pinEntered, setPinEntered] = useState(false);

  // Handle keypress to update PIN
  const handleKeyPress = (number) => {
    if (pin.length === 4) {
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

  // Handle submit
  const handleSubmit = () => {
    if (pin.length === 4) {
    

      // Save the PIN to Realtime Database under the user's ID
      set(ref(rtdb, 'pin/' ), pin)
        .then(() => {
          
          alert("PIN has been set successfully! You can now open the lock.");
          setPin('');
          setPinEntered(true);
        })
        .catch((error) => {
          // console.error('Error saving PIN:', error);
          setPin('');
          setPinEntered(true);
          alert( "There was an error saving the PIN.");
        });
    } else {
      alert("Please enter a 4-digit PIN.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register PIN</Text>
      <View style={styles.pinIndicator}>
        {Array.from({ length: 4 }, (_, index) => (
          <Text key={index} style={[styles.pinText, { color: index < pin.length ? 'black' : 'gray' }]}>{index < pin.length ? pin[index] : '*'}</Text>
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
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.backButton} onPress={handleSubmit}>
            <Text style={styles.backButtonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.backButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
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
  backButton: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
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
