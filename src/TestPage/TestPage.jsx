import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import "./TestPage.css";

const TestPage = () => {
  const [questions, setQuestions] = useState([]); 
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [selectedOption, setSelectedOption] = useState(null); 
  const [showTestSummary, setShowTestSummary] = useState(false);

  // Function to fetch questions from the API
  const fetchQuestions = async () => {
    try {      
      const response = await axios.get('https://84647cba-f971-41da-8bed-a90d774bac9b-00-kozq80yd89n5.sisko.replit.dev/api/questions');      
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
    setSelectedOption(null); 
  };
  const previousQuestion = () => {
    setCurrentQuestion(prev => prev - 1);
    setSelectedOption(null); 
  };
  const selectOption = (option) => {
    setSelectedOption(option);
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].selectedOption = option;
    setQuestions(updatedQuestions);
  };
  const finishTest = () => {
    setShowTestSummary(true);
  };

  // Function to calculate the total score
  const calculateScore = () => {
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questions.forEach((question) => {
      if (question.selectedOption === question.correctOption) {
        correctAnswers += 3;
      } else {
        wrongAnswers -= 1;
      }
    });

    return { correctAnswers, wrongAnswers };
  };

  // Fetch questions when the component mounts
  useEffect(() => {
    fetchQuestions();
  }, []);

  // JSX for the test summary
  const testSummaryJSX = (
    <div className="test-summary">
      <h2>Test Summary</h2>
      <table>
        <tbody>
          <tr>
            <td>Total Questions:</td>
            <td>{questions.length}</td>
          </tr>
          <tr>
            <td>Answered Questions:</td>
            <td>{questions.filter(question => question.selectedOption).length}</td>
          </tr>
          <tr>
            <td>Correct Answers:</td>
            <td>{calculateScore().correctAnswers}</td>
          </tr>
          <tr>
            <td>Wrong Answers:</td>
            <td>{calculateScore().wrongAnswers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="test-page">
      {!showTestSummary && (
        <>
          {questions.length > 0 && (
            <div className="question-container">
              <h3>Question : {questions[currentQuestion].question} </h3>
              <div className="question">
                <p>{questions[currentQuestion].text}</p>
                {questions[currentQuestion].image && <img src={questions[currentQuestion].imageUrl} alt="Question" />}
              </div>
              <div className="options">
                <table>
                  <tbody>
                    {questions[currentQuestion].options.map((option, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="radio"
                            id={`option${index}`}
                            name="options"
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => selectOption(option)}
                          />
                          <label htmlFor={`option${index}`}>{option}</label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <div className="navigation-buttons">
            {currentQuestion > 0 && <button onClick={previousQuestion}>Previous</button>}
            {currentQuestion < questions.length - 1 && <button onClick={nextQuestion}>Next</button>}
            {currentQuestion === questions.length - 1 && <button onClick={finishTest}>Finish Test</button>}
          </div>
        </>
      )}
      {showTestSummary && testSummaryJSX}
    </div>
  );
};

export default TestPage;
