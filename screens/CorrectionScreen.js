import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { QuizContext } from '../context/QuizContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function CorrectionScreen({ navigation }) {
  const { userAnswers, questions } = useContext(QuizContext);

  const renderQuestionItem = (ans, i) => (
    <View key={i} style={[
      styles.questionBlock,
      ans.selected === ans.correct ? styles.correct : styles.incorrect
    ]}>
      <Text style={styles.questionNumber}>Question {i + 1}</Text>
      <Text style={styles.questionText}>{ans.question}</Text>
      
      {ans.selected === ans.correct ? (
        <View style={styles.answerContainer}>
          <Text style={styles.correctAnswer}>
            Votre réponse est correcte : {questions[i].options[ans.correct]}
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.answerContainer}>
            <Text style={styles.userAnswer}>
              Votre réponse incorrecte : {questions[i].options[ans.selected] || 'Non répondu'}
            </Text>
          </View>
          <View style={styles.answerContainer}>
            <Text style={styles.correctAnswer}>
              Bonne réponse : {questions[i].options[ans.correct]}
            </Text>
          </View>
        </>
      )}
      
      {ans.selected !== ans.correct && (
        <Text style={styles.explanation}>
          {questions[i].explanation || "Assurez-vous de revoir ce concept."}
        </Text>
      )}
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
       

        
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {userAnswers.map((ans, i) => renderQuestionItem(ans, i))}
          
          <TouchableOpacity
            style={styles.restartButton}
            onPress={() => navigation.navigate('Quiz')}
          >
            <Text style={styles.restartButtonText}>Recommencer le quiz</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
 
kButtonText: {
    fontSize: 24,
    color: '#0066cc',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  questionBlock: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  correct: {
    borderLeftWidth: 5,
    borderLeftColor: '#4caf50',
  },
  incorrect: {
    borderLeftWidth: 5,
    borderLeftColor: '#f44336',
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 5,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    lineHeight: 24,
  },
  answerContainer: {
    marginBottom: 8,
  },
  userAnswer: {
    color: '#f44336',
    fontWeight: '500',
  },
  correctAnswer: {
    color: '#4caf50',
    fontWeight: '500',
  },
  explanation: {
    marginTop: 10,
    fontStyle: 'italic',
    color: '#666',
    lineHeight: 20,
  },
  restartButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  restartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});