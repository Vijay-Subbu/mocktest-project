import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import "./TestPage.css";

const TestPage = () => {
  const [questions, setQuestions] = useState([]); 
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [selectedOption, setSelectedOption] = useState(null); 
  const [showTestSummary, setShowTestSummary] = useState(false);
  // const [startTime, setStartTime] = useState(null);
  // const [totalTimeTaken, setTotalTimeTaken] = useState(0);
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
    // const endTime = Date.now();
    // const timeTaken = endTime - startTime; 
    // setTotalTimeTaken(timeTaken);
    // console.log("Total time taken:", totalTimeTaken);
  };

  // Function to calculate the total score
  const calculateScore = () => {
    let totalMarks = 0;
    questions.forEach((question) => {
      if (question.selectedOption === question.correctAnswer) {
        totalMarks += 3;
      } else if (question.selectedOption) {
        totalMarks -= 1;
      }
    });
    return totalMarks;
  };
  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timer);
        setShowTestSummary(true); 
      } else {
        if (seconds === 0) {
          if (minutes === 0) {
            setHours(prev => prev - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            setMinutes(prev => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(prev => prev - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);
  
  
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
            <td>Attempted Questions:</td>
            <td>{questions.filter(question => question.selectedOption).length}</td>
          </tr>
          <tr>
            <td>Correct Answers:</td>
            <td>{questions.filter(question => question.selectedOption && question.selectedOption == question.correctAnswer).length}</td>
          </tr>
          <tr>
            <td>Wrong Answers:</td>
            <td>{questions.filter(question => question.selectedOption && question.selectedOption !== question.correctAnswer).length}</td>
          </tr>
          <tr>
            <td>Total Marks:</td>
            <td>{calculateScore()}</td>
          </tr>
        </tbody>
      </table>
      <p>*Marks for correct Answers is +3 & wrong answers is -1</p>
    </div>
    
  );

  return (
    <div className="test-page">
      {!showTestSummary && (
        <>
          <div className="timer">
            <h3>Time Remaining: {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h3>
          </div>
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
                    {[0, 1].map(rowIndex => (
                      <tr key={rowIndex}>
                        {[0, 1].map(columnIndex => {
                          const index = rowIndex * 2 + columnIndex;
                          if (index < questions[currentQuestion].options.length) {
                            const option = questions[currentQuestion].options[index];
                            return (
                              <td key={index}>
                                <label className="radio-label" htmlFor={`option${index}`}>
                                  <input
                                    type="radio"
                                    id={`option${index}`}
                                    name="options"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => selectOption(option)}
                                  />
                                  {option}
                                </label>
                              </td>
                            );
                          } else {
                            return <td key={index}></td>; 
                          }
                        })}
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
            {currentQuestion === questions.length - 1 && <button onClick={finishTest} className="finish-button">Finish Test</button>}
          </div>
        </>
      )}
      {showTestSummary && testSummaryJSX}
    </div>
  );
};

export default TestPage;
