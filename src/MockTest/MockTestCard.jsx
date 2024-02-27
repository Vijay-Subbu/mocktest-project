import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MockTest.css";
// import {saveAs} from 'file-saver';


const MockTestCard = () => {
  
  return (
    <div className="card">
      <img src="https://baseedu.in/NEET-Mock-Test/images/NEET%20Mock%20Mock%20Tests%20Creative.png" width="50" height="80"className="card-img-top" alt="..."></img>
      <div className="card-body">
      <h3 className="card-title">Test Name</h3>
      </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Time Duration: 2hrs</li>
          <li className="list-group-item">No. of Questions:100</li>
          <li className="list-group-item">Subjects: Physics, Chemistry, Biology</li>
        </ul>
        <div className="card-body">     
          <Link to={"/testinstructionpage"} className="btn btn-success" target="_blank">
            Start Test
          </Link>
      <a
        href={"/Neet-data.pdf"}
        className="btn btn-danger"
        download
      >
        Download as PDF
      </a>
    </div>
      </div>
  );
};

export default MockTestCard;
