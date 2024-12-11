import React from 'react';
import { StyleSheet, View, Text,  TouchableOpacity } from 'react-native';

export default function SecondPage({ navigation }) {
  const handleKeyPress = (number) => {
    console.log("Key pressed:", number);
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.keypad}>
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Array.from({ length: 3 }, (_, colIndex) => {
              const number = rowIndex * 3 + colIndex + 1;
              return (
                <TouchableOpacity
                  key={number}
                  style={styles.key}
                  onPress={() => handleKeyPress(number)}
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
            onPress={() => handleKeyPress(0)}
          >
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.backButtonText}>Go Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 100, // Increased width for larger buttons
    height: 100, // Increased height for larger buttons
    margin: 10, // Increased margin for spacing
    backgroundColor: '#007BFF', // Button color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Optional: Rounded corners
  },
  keyText: {
    fontSize: 40, // Increased font size for better visibility
    color: '#FFFFFF', // Text color
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});