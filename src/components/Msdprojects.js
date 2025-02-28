import React from "react";
import "./Msdprojects.css";
import attendance from "../attendanceportal-image.jpg";
import user from "../user_management3.jpg";
import catalog from "../catalog.png";
import calculator from "../calculator.png";
import colorflipper from "../colorflipper.png";
import netflix from "../netflix.png";
import quiz from "../quiz.jpg";

function Msdprojects() {
    return (
        <section id="msdprojects">
             <h1 id="title">Basic Projects</h1>
     <div id="basic">
       
     <div class="slider">
        <span style={{ "--i": 1}}> <a href="https://calculator-drab-psi-14.vercel.app/">
            <div className="project-details">
                <div id="msdproject">
                    <img src={calculator} alt="Calculator" id="project-image" />
                    <h3>Calculator</h3>
                    <h4>I developed a calculator app using HTML, CSS, and JavaScript.</h4>
                </div>
            </div>
        </a>
        </span>
        <span style={{ "--i": 2 }}> <a href="https://github.com/poojaboppana/User_management">
            <div className="project-details">
                <div id="msdproject">
                    <img src={user} alt="User Management" id="project-image" />
                    <h3>User Management</h3>
                    <h4>I created a user management system with EJS, Node.js, and Express for dynamic templates and backend functionality.</h4>
                </div>
            </div>
        </a>
        </span>
        <span style={{ "--i": 3 }}>  <a href="https://github.com/poojaboppana/catalog">
            <div className="project-details">
                <div id="msdproject">
                    <img src={catalog} alt="Catalog" id="project-image" />
                    <h3>Catalog</h3>
                    <h4>I developed a Catalog app using HTML, CSS, and JavaScript.</h4>
                </div>
            </div>
        </a>
        </span>
        <span style={{ "--i": 4 }}>  <a href="https://github.com/poojaboppana/QuotesApi">
            <div className="project-details">
                <div id="msdproject">
                    <img src={catalog} alt="Quotes API" id="project-image" />
                    <h3>Quotes API</h3>
                    <h4>I created a Quotes API to serve random and categorized quotes via RESTful endpoints.</h4>
                </div>
            </div>
        </a>
        </span>
        <span style={{ "--i": 5 }}>  <a href="https://github.com/poojaboppana/color-flipper">
            <div className="project-details">
                <div id="msdproject">
                    <img src={colorflipper} alt="Color Flipper" id="project-image" />
                    <h3>Color Flipper</h3>
                    <h4>I developed a Color Flipper app using HTML, CSS, and JavaScript to generate random background colors.</h4>
                </div>
            </div>
        </a>
        </span>
        <span style={{ "--i": 6 }}>  <a href="https://github.com/poojaboppana/Navbar">
            <div className="project-details">
                <div id="msdproject">
                    <img src={catalog} alt="Navbar" id="project-image" />
                    <h3>Navbar</h3>
                    <h4>A responsive navbar with smooth scrolling and interactive design, built using HTML, CSS.</h4>
                </div>
            </div>
        </a>
        </span>
        <span style={{ "--i": 7 }}>  <a href="https://github.com/poojaboppana/frames">
            <div className="project-details">
                <div id="msdproject">
                    <img src={catalog} alt="Frames" id="project-image"/>
                    <h3>Frames</h3>
                    <h4>A 3-row layout with a clickable left column that updates content in the right column. Built with HTML, CSS.</h4>
                </div>
            </div>
        </a>
        </span>
    </div>
    </div>




<h1 id="title"> Medium And Advance Projects</h1>
 

    <div id="advance">
     <div class="slider">
        <span style={{ "--i": 1}}>  <a href="https://github.com/poojaboppana/React-axios-jokes-app">
                 
                 <div className="project-details" id="one">
 
                         <div id="msdproject">
                            
                             <img src={catalog} alt="Quiz-App" id="project-image"/>
                             <h3>Jokes App</h3>
                            
         
                             <h4>"I built a jokes app in React using Axios to fetch and display random jokes from an API."</h4>
                         </div>
                           
                          </div>
                          </a>

        </span>
        <span style={{ "--i": 2 }}>   <a href="https://github.com/poojaboppana/Quiz_App">
                    
                    <div className="project-details" id="two">

                            <div id="msdproject">
                               
                                <img src={quiz} alt="Quiz-App" id="project-image"/>
                                <h3>Quiz App</h3>
                               
            
                                <h4>"I created a quiz app using HTML, CSS, and JavaScript with interactive questions and score tracking."</h4>
                            </div>
                            
                             </div>
                             </a> 
        </span>
        <span style={{ "--i": 3 }}>   <a href="https://github.com/poojaboppana/Netflix-Landing-Page">
                 
                 <div className="project-details" id="three">
                        
                         <div id="msdproject">
                            
                             <img src={netflix} alt="Netflix" id="project-image"/>
                             <h3>Neftlix Landing Page Clone</h3>
                            
         
                             <h4>"I created a Netflix landing page clone using HTML and CSS, replicating the design and layout."</h4>
                         </div>
                        
                          </div>
                          </a> 

        </span>
        <span style={{ "--i": 4 }}>  <a href="https://github.com/poojaboppana/seating">
                  
                  <div className="project-details" id="one">
           
                          <div id="msdproject">
                             
                              <img src={catalog} alt="attendance" id="project-image"/>
                              <h3>Seating Arrangement</h3>
                             
          
                              <h4>"I built a seating arrangement system with Node.js, Express, and a dynamic frontend for seat management."</h4>
                          </div>
                          
                           </div>
                           </a> 
        </span>
        <span style={{ "--i": 5 }}>   <a href="https://github.com/poojaboppana/Attendance-portal">
                    
                    <div className="project-details" id="two">
                          
                            <div id="msdproject">
                               
                                <img src={attendance} alt="attendance" id="project-image"/>
                                <h3>Student Attendance Portal</h3>
                               
            
                                <h4>"Web app to manage student attendance with login, marking, and real-time records."</h4>
                            </div>
                             
                              </div>
                              </a>
        </span>
        <span style={{ "--i": 6 }}>   <a href="https://github.com/poojaboppana/PersonalPortofolio">
                    
                    <div className="project-details" id="two">
                          
                            <div id="msdproject">
                               
                                <img src={catalog} alt="portofolio" id="project-image"/>
                                <h3>Personal Portofolio</h3>
                               
            
                                <h4>"A website showcasing my skills, projects, built with HTML, CSS, and JavaScript."</h4>
                            </div>
                             
                              </div>
                              </a>
        </span>

        <span style={{ "--i": 7 }}>   <a href="https://github.com/poojaboppana/invigilation-management">
                    
                    <div className="project-details" id="two">
                          
                            <div id="msdproject">
                               
                                <img src={catalog} alt="invigilation" id="project-image"/>
                                <h3>Invigilation Management</h3>
                               
            
                                <h4>"Web app to manage teachers invigilations for exams efficiently."</h4>
                            </div>
                             
                              </div>
                              </a>
        </span>
    </div>
    </div>
            </section>
      
    );
}

export default Msdprojects;
