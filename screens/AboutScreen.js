import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <LinearGradient
      colors={['#22c2e6', '#1a8fe3']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileCard}>
          <Image 
            source={require('../assets/profile.jpg')} 
            style={styles.profileImage}
          />
          
          <View style={styles.waveEffect} />
          
          <Text style={styles.title}>À propos</Text>
          
          <View style={styles.contentBox}>
            <Text style={styles.text}>
              Cette application a été développée par Skandar Gharbi. Elle permet d'apprendre les bases des systèmes embarqués de manière ludique à travers des quiz interactifs.
            </Text>
          </View>
          
          <View style={styles.badge}>
            <Text style={styles.badgeText}>ÉTUDIANT EN SYSTÈMES EMBARQUÉS</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: -75,
    marginBottom: 20,
    zIndex: 2,
  },
  waveEffect: {
    position: 'absolute',
    top: -50,
    height: 100,
    width: width * 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 100,
    transform: [{ rotate: '-5deg' }],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  contentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#555',
  },
  badge: {
    backgroundColor: '#22c2e6',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 0.75,
  },
});