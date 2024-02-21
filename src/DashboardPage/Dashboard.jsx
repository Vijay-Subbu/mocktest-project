import React, { useState } from 'react';
// import axios from 'axios';
import './Dashboard.css';
import Navbar from '../NavBar/Navbar';
import MockTestCard from '../MockTest/MockTestCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dashboard.css";


const Dashboard = () => {
  // const [mockTests, setMockTests] = useState([]);
  // const [selectedTest, setSelectedTest] = seState(null);   
  
  // useEffect(() => {
  //   axios.get('https://84647cba-f971-41da-8bed-a90d774bac9b-00-kozq80yd89n5.sisko.replit.dev/api/mock-tests')
  //     .then(response => {
  //       setMockTests(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching mock tests:', error);
  //     });
  // }, []);  

  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <h2>Mock Tests</h2>
        <br/>
          <div className="mock-test-cards-container">    
            <MockTestCard/>
            <MockTestCard/>
            <MockTestCard/>
            <MockTestCard/>
                     
          </div>
        
        {/* {selectedTest && (
          <div className="mock-test-details">
            <h2>Mock Test Details</h2>
            <h3>{selectedTest.name}</h3>
            <p>Subjects: {selectedTest.subjects.join(', ')}</p>
            <p>Duration: {selectedTest.duration}</p>
            <h4>Questions:</h4>
            <ul>
              {selectedTest.questions.map(question => (
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
        )} */}
        
      </div>
    </div>
  );
};

export default Dashboard;
