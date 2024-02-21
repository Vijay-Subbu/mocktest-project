import NavBar from '../NavBar/Navbar';
import "./Home.css";
const Home = () =>{
  return(
    <div>
      <NavBar />      
      <div className='welcome-message'>
        <h2>Welcome to NEET Prep</h2>
        <h3>Your ultimate destination for mastering the art of acing the NEET exam and fulfilling your dreams of a career in medicine!</h3> 
        <ul>
          <li>
        <p className="fact"><mark>Comprehensive Learning Hub:</mark> NEET Prep is your ultimate destination for mastering the art of acing the NEET exam and fulfilling your dreams of a career in medicine.</p>
            </li>
          <li>
        <p className="fact"><mark>Expert Guidance:</mark> Our team of seasoned educators, experienced mentors, and subject matter experts are here to guide you through every challenge, clarify every doubt, and inspire you to reach your full potential.</p>
          </li>
          <li>
        <p className="fact"><mark>Adaptive Learning Technology:</mark> We tailor our resources to your individual needs, ensuring that you receive personalized support exactly where you need it the most.</p>
            </li>
          <li>
        <p className="fact"><mark>Extensive Resource Library:</mark> Dive into our vast repository of study materials, practice papers, and reference guides meticulously curated to cover every topic, subtopic, and nuance of the NEET syllabus.</p>
          </li>
          <li>
        <p className="fact"><mark>Inspiring Success Stories:</mark> Join a community of driven individuals like yourself and draw inspiration from the success stories of past NEET Prep students.</p>
            </li>
          </ul>
      </div>      
    </div>
  )
} 
export default Home;