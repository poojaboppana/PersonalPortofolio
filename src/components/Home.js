
import "./Home.css";
import { Link } from "react-router-dom";
import resume from "./resume.pdf";
import webdev from "../webdev.jpg";
import image from "../imageprocess.jpg";
import data from "../datamining.png";
import about from "../aboutimg.png";
import github from "../icons8-github-32.png";
import linkedin from "../icons8-linkedin-32.png";
import insta from "./insta-icon.png";
import gif from "../confetti-glitter.gif";
import journey1 from "./journey1.jpeg";
import journey2 from "./journey2.jpeg";
import journey3 from "./journey3.jpeg";
import journey4 from "./journey4.jpeg";
import journey5 from "./journey5.jpeg";
import React, { useState } from "react";
function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    setSubmitted(true); // Show popup
    setTimeout(() => setSubmitted(false), 3000); // Hide after 3 seconds
  };
  return (
    <div className="Home">

<nav className="navbar">
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#about" className="button-92">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="button-92">
            Projects
          </a>
        </li>
        <li>
          <a href="#myJourney" className="button-92">
            Journey
          </a>
        </li>
        <li>
          <a href="#contact" className="button-92">
            Contact
          </a>
        </li>
      </ul>
    </nav>

      {/* About Section */}
      <section id="about">
        <div id="about-content">
          <h1>
            Hi, <span id="span-item">I'm Pooja Boppana!</span>
          </h1>
          <h3>
            A Computer Science student passionate about frontend development and
            aspiring to be a software Developer.
          </h3>
          <div id="icon-resume">
            <div id="icon">
              <div id="icons1">
                <a href="https://github.com/poojaboppana">
                  <img src={github} alt="github" id="about-icon1" />
                </a>
                <img src={gif} alt="gif" id="about-gif1" />
              </div>
              <div id="icons2">
                <a href="https://www.linkedin.com/in/pooja-boppana-391a4925a/">
                  <img src={linkedin} alt="linkedin" id="about-icon2" />
                </a>
                <img src={gif} alt="gif" id="about-gif2" />
              </div>
              <div id="icons3">
                <a href="https://www.instagram.com/_poojaboppana_?igsh=aWVjMDk3OGRwdW9i">
                  <img src={insta} alt="insta" id="about-icon3" />
                </a>
                <img src={gif} alt="gif" id="about-gif3" />
              </div>
            </div>
            <div className="resume-class">
              <a href={resume} download="Pooja_Boppana_Resume.pdf">
                <button id="resume">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
        <img src={about} alt="about" id="about-image" />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Link to="/Dipprojects">
          <div id="project">
            <img src={image} alt="DIP" id="project-image" />
            <h2>Projects on</h2>
            <h3>
              <span>Digital Image Processing</span>
            </h3>   
          </div>

       
        
        </Link>
        <Link to="/Msdprojects">
          <div id="project">
            <img src={webdev} alt="Web Dev" id="project-image" />
            <h2>Projects on</h2>
            <h3>
              <span>Web Development</span>
            </h3>
          </div>
        </Link>
        <Link to="/Dmtprojects">
          <div id="project">
            <img src={data} alt="Data Mining" id="project-image" />
            <h2>Projects on</h2>
            <h3>
              <span>Data Mining Techniques</span>
            </h3>
          </div>
        </Link>
      </section>

      {/* Journey Section */}
      <section id="myJourney">
        <h1>My Journey</h1>
        <div className="timeline">
          <div className="timeline-item left">
            <img src={journey1} alt="Student" />
            <div className="timeline-content">
              <h3>Start</h3>
              <p>Joined-VFSTR,CSE</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>1st Year</h3>
              <p>
                Joined as Member of E-cell, Got certificate in Throwball Sport, Learned- C
                Language, Python
              </p>
            </div>
            <img src={journey2} alt="1st Year" />
          </div>

          <div className="timeline-item left">
            <img src={journey3} alt="2nd Year" />
            <div className="timeline-content">
              <h3>2nd Year</h3>
              <p>
                Got First Prize in Department Fest for Relay Race, Kho-Kho,
                Learned- Java, SQL, DBMS, Web Development
              </p>
            </div>
          </div>

          <div className="timeline-item right-present">
            <div className="timeline-content">
              <h3>3rd Year</h3>
              <p>
               Became a Secretary for R&C vertical in Ecell, Participated in Ideathon, Hackathon, Did Internship in Pantech
                Solutions for Full Stack Development, Learned MERN Stack,Computer Networks,
                Learning-AWS, Ethical Hacking
              </p>
            </div>
            <img src={journey4} alt="3rd Year" />
          </div>

          <div className="timeline-item left">
            <img src={journey5} alt="4th Year (Stop)" />
            <div className="timeline-content">
              <h3>4th Year</h3>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact">
      <div id="contact-form">
        <h1 id="heading">Contact me!!</h1>
        <form
          action="https://formsubmit.co/poojaboppana99@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="text" id="name" placeholder="Enter your name" name="name" required />
          <br />
          <input type="email" id="email" placeholder="Enter your Email" name="email" required />
          <br />
          <textarea id="message" placeholder="Enter the Message" name="message" required></textarea>
          <br />
          <button id="contact-button" type="submit" className="button">
            Submit
          </button>
        </form>

        {submitted && (
          <div className="popup">
            <p>Message Sent Successfully!</p>
          </div>
        )}
      </div>
</section>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h2 className="footer-title">Pooja Boppana</h2>
          <p className="footer-subtitle">
            Frontend Developer | Software Developer
          </p>

          <ul className="footer-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#myJourney">Journey</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
           
          </ul>

          <div className="footer-social">
            <a
              href="https://github.com/poojaboppana"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pooja-boppana-391a4925a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:poojaboppana99@gmail.com">Email</a>
          </div>

          <p className="footer-copy">&copy; 2025 Pooja Boppana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;