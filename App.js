import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import CorrectionScreen from './screens/CorrectionScreen';
import AboutScreen from './screens/AboutScreen';

import { QuizProvider } from './context/QuizContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QuizProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
          <Stack.Screen name="Correction" component={CorrectionScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QuizProvider>
  );
}
