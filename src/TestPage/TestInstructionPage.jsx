import React from 'react';
import {Link} from 'react-router-dom';
import "./TestPage.css";

const TestInstructionPage = () => {
  return (
    <div className="instruction-page">
      <h2>Test Instructions:</h2>
      <p>Welcome to the testpage. Please read the instructions carefully before starting the test.</p>
      <div className="instruction-list">
        <ol>
          <li>Ensure you have a stable internet connection.</li>
          <li>Do not refresh the page during the test.</li>
          <li>Answer all questions to the best of your ability.</li>
          <li>Click the 'Next' button to move to the next question.</li>
          <li>Review your answers before submitting the test.</li>
          <li>Once you submit the test, you cannot go back.</li>
        </ol>
      </div>
      <Link to={"/testpage"} className="btn btn-success">
        Start Test
      </Link>
    </div>
  );
};

export default TestInstructionPage;
