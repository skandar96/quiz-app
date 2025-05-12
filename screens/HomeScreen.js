import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../assets/image1.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Quiz Systèmes Embarqués</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Text style={styles.buttonText}>Commencer le quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>À propos</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Assombrissement pour meilleure lisibilité
    padding: 20,
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 40, 
    textAlign: 'center',
    color: '#fff', // Texte blanc pour contraste
    textShadowColor: 'rgba(0,0,0,0.5)', // Ombre pour meilleure lisibilité
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});