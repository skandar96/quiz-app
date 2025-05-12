import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { QuizContext } from '../context/QuizContext';

export default function QuizScreen({ navigation }) {
  const { score, setScore, userAnswers, setUserAnswers, questions, setQuestions } = useContext(QuizContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuestions = async () => {
      const snapshot = await getDocs(collection(db, 'questions'));
      const loadedQuestions = [];
      snapshot.forEach(doc => {
        const d = doc.data();
        if (d.question && Array.isArray(d.options)) {
          loadedQuestions.push({ id: doc.id, ...d });
        }
      });
      setQuestions(loadedQuestions);
      setScore(0);
      setUserAnswers([]);
      setLoading(false);
    };
    loadQuestions();
  }, []);

  if (loading || questions.length === 0) {
    return <Text style={styles.loading}>Chargement...</Text>;
  }

  const current = questions[currentIndex];

  const handleNext = () => {
    const isCorrect = selectedOption === current.answer;
    setScore(prev => isCorrect ? prev + 1 : prev);
    setUserAnswers(prev => [
      ...prev,
      {
        question: current.question,
        selected: selectedOption,
        correct: current.answer
      }
    ]);
    setSelectedOption(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('Result');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Question {currentIndex + 1} / {questions.length}
      </Text>

      <Text style={styles.question}>{current.question}</Text>

      {current.options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          style={[
            styles.option,
            selectedOption === idx && styles.selectedOption
          ]}
          onPress={() => setSelectedOption(idx)}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedOption === null && styles.nextButtonDisabled
        ]}
        onPress={handleNext}
        disabled={selectedOption === null}
      >
        <Text style={styles.nextButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f0ff',
    padding: 20,
    justifyContent: 'center',
  },
  loading: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 18,
  },
  progress: {
    fontSize: 16,
    color: '#7D4FFE',
    marginBottom: 10,
    fontWeight: '600',
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  option: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOption: {
    backgroundColor: '#cce5ff',
    borderColor: '#3399ff',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: '#a0c4e3',
  },
  nextButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
