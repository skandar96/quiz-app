import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  return (
    <QuizContext.Provider value={{
      score, setScore,
      userAnswers, setUserAnswers,
      questions, setQuestions
    }}>
      {children}
    </QuizContext.Provider>
  );
};
