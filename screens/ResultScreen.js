import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { QuizContext } from '../context/QuizContext';

export default function ResultScreen({ navigation }) {
  const { score, questions } = useContext(QuizContext);
  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  // Messages personnalisés selon le score
  const getMessage = () => {
    if (percentage >= 80) return "Bravo ! Excellent travail ! 🎉";
    if (percentage >= 60) return "Bien joué ! Vous maîtrisez bien le sujet 👍";
    if (percentage >= 40) return "Pas mal ! Encore un peu de pratique 💪";
    return "Ne baissez pas les bras ! Continuez à apprendre ✨";
  };

  // Couleur dynamique selon le score
  const getColor = () => {
    if (percentage >= 80) return '#2e7d32'; // Vert
    if (percentage >= 60) return '#ff9800'; // Orange
    return '#c62828'; // Rouge
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résultats</Text>
      
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>
          Score: {score}/{total}
        </Text>
        <Text style={[styles.percentage, { color: getColor() }]}>
          {percentage}%
        </Text>
        <Text style={styles.message}>
          {getMessage()}
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.replayButton]}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.buttonText}>Rejouer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.correctionButton]}
        onPress={() => navigation.navigate('Correction')}
      >
        <Text style={styles.buttonText}>Voir les corrections</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.homeButton]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Retour à l'accueil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f7fa',
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#333',
  },
  scoreContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 22,
    marginBottom: 5,
    color: '#555',
  },
  percentage: {
    fontSize: 42,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    color: '#444',
    fontStyle: 'italic',
    lineHeight: 26,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
  },
  replayButton: {
    backgroundColor: '#4caf50', // Vert
  },
  correctionButton: {
    backgroundColor: '#0066cc', // Bleu
  },
  homeButton: {
    backgroundColor: '#757575', // Gris
  },
  buttonText: { 
    color: 'white', 
    fontSize: 18,
    fontWeight: '500',
  },
});