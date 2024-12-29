import "./Home.css";
import { Link } from "react-router-dom";
import pooja from "../pooja.png";
import webdev from "../webdev.jpg";
import image from "../imageprocess.jpg";
import data from "../datamining.png";
import { useState } from "react";

function Home({ feedbacks }) {
 
        const [currentIndex, setCurrentIndex] = useState(0);
        const itemsPerPage = 3;
      
        const handleNext = () => {
          if (currentIndex + itemsPerPage < feedbacks.length) {
            setCurrentIndex(currentIndex + 1);
          }
        };
      
        const handlePrev = () => {
          if (currentIndex > 0) {
            setCurrentIndex(currentIndex -1);
          }
        };
      
        const displayedFeedbacks = feedbacks.slice(currentIndex, currentIndex + itemsPerPage);
  return (
    <div className="Home">
      <nav>
        <ul>
          <li>
            <a href="#about" className="button-92">About</a>
          </li>
          <li>
            <a href="#projects" className="button-92">Projects</a>
          </li>
          <li>
            <a href="#contact" className="button-92">Contact</a>
          </li>
          <li>
            <a href="#feedback" className="button-92">Feedback</a>
          </li>
        </ul>
      </nav>

      <section id="about">
        <img src={pooja} alt="pooja" id="home-image" />
        <p>This is the About section.</p>
      </section>

      <section id="projects">
        <Link to="/Dipprojects">
          <div id="project">
            <img src={image} alt="attendance" id="project-image" />
            <h2>Projects on</h2>
            <h3><span>Digital Image Processing</span></h3>
          </div>
        </Link>
        <Link to="/Msdprojects">
          <div id="project">
            <img src={webdev} alt="attendance" id="project-image" />
            <h2>Projects on</h2>
            <h3><span>Web Development</span></h3>
          </div>
        </Link>
        <Link to="/Dmtprojects">
          <div id="project">
            <img src={data} alt="attendance" id="project-image" />
            <h2>Projects on</h2>
            <h3><span>Data Mining Techniques</span></h3>
          </div>
        </Link>
      </section>

      <section id="feedback">
       
      <h1>Feedback</h1>
    
       <div id="content"> {feedbacks.length === 0 ? (
          <p style={{textAlign:"center"}}>No feedback yet. Be the first to leave feedback!</p>
        ) : (
          <div className="feedback-carousel">
            <button onClick={handlePrev} className="arrow" disabled={currentIndex === 0}>
              &#9664;
            </button>
            <ul>
              {displayedFeedbacks.map((item, index) => (
                <li key={index}>
                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>
                  <p><strong>Role:</strong>{item.role}</p>
                  <p><strong>Organisation/Company:</strong>{item.organization}</p>
                  <p>
                    <strong>Your Words:</strong> {item.feedback}
                  </p>
                  <p>
                    <strong>Rating:</strong> {item.rating}/5
                  </p>
                </li>
              ))}
            </ul>
            <button id="arrow"
              onClick={handleNext}
              className="arrow"
              disabled={currentIndex + itemsPerPage >= feedbacks.length}
            >
              &#9654;
            </button>
          </div>
        )} </div>
        <Link to="/Feedback" className="give-feedback">
          Give Feedback
        </Link>
      </section>

      <section id="contact">
        <div id="contact-form">
          <h1 id="heading">Contact me!!</h1>
          <form>
            <input type="text" id="name" placeholder="Enter your name" name="name" required />
            <br />
            <input type="email" id="email" placeholder="Enter your Email" name="email" required />
            <br />
            <textarea id="message" placeholder="Enter the Message" name="message" required></textarea>
            <br />
            <button id="contact-button" type="submit" className="button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
