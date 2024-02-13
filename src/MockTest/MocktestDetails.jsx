import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MockTestDetails = ({ match }) => {
  const { id } = match.params;
  const [mockTest, setMockTest] = useState(null);

  useEffect(() => {
    try {
      axios.get(`https://84647cba-f971-41da-8bed-a90d774bac9b-00-kozq80yd89n5.sisko.replit.dev/api/mock-test/${id}`)
        .then(response => {
          setMockTest(response.data);
        })
        .catch(error => {
          console.error('Error fetching mock test details:', error);
        });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }, [id]);

  return (
    <div>
      {mockTest ? (
        <div>
          <h2>Mocktest Details</h2>
          <h3>{mockTest.name}</h3>
          <p>Subjects: {mockTest.subjects && mockTest.subjects.join(', ')}</p>
          <p>Duration: {mockTest.duration}</p>
          <h4>Questions:</h4>
          <ul>
            {mockTest.questions.map(question => (
              <li key={question.id}>
                <p>{question.question}</p>
                <ul>
                  {question.options.map(option => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
                <p>Correct Answer: {question.correctAnswer}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Error: Unable to fetch mock test details</p>
      )}
    </div>
  );
};
export default MockTestDetails;
