import attendance from "../attendanceportal-image.jpg"
import "./Msdprojects.css";
import user from "../user_management3.jpg";
import catalog from "../catalog.png";
import calculator from "../calculator.png";
import colorflipper from "../colorflipper.png";
import netflix from "../netflix.png";
import quiz from "../quiz.jpg";
function Msdprojects(){
    return(
        <section id="msdprojects">
                       <h1>Basic Projects</h1>
    <section id="basic">
    <div className="project-wrapper">
    <a href="https://calculator-drab-psi-14.vercel.app/">
                    <h1 id="one">1</h1>
                    <div className="project-details">
                       
                            <div id="msdproject">
                                <img src={calculator} alt="calculator" id="project-image" />
                                <h3><span>Calculator</span></h3>
                                <h4>"I developed a calculator app using HTML, CSS, and JavaScript."</h4>
                            </div>
                       
                    </div>
                    </a>
                </div>
                <div className="project-wrapper">
                <a href="https://github.com/poojaboppana/User_management">
                    <h1 id="two">2</h1>
                    <div className="project-details">
                           
                            <div id="msdproject">
                               
                                <img src={user} alt="calculator" id="project-image"/>
                                <h3><span>User Management</span></h3>
                               
            
                                <h4>"I created a user management system with EJS, Node.js, and Express for dynamic templates and backend functionality."</h4>
                            </div>
                             
                             </div>
                             </a>
                             </div>
                             <div className="project-wrapper">
    <a href="https://github.com/poojaboppana/catalog">
        <h1 id="three">3</h1>
        <div className="project-details">
            <div id="msdproject">
                <img src={catalog} alt="catalog" id="project-image" />
                <h3><span>Catalog</span></h3>
                <h4>"I developed a Catalog app using HTML, CSS, and JavaScript."</h4>
            </div>
        </div>
    </a>
</div>



                             <div className="project-wrapper">
                             <a href="https://github.com/poojaboppana/QuotesApi">
                    <h1 id="four">4</h1>
                    <div className="project-details">
                             
                            <div id="msdproject">
                               
                                <img src={catalog} alt="QuotesApi" id="project-image"/>
                                <h3><span>Quotes Api</span></h3>
                               
            
                                <h4>"I created a Quotes API to serve random and categorized quotes via RESTful endpoints."</h4>
                            </div>
                            
                             </div>
                             </a> 
                             </div>
                             <div className="project-wrapper">
                             <a href="https://github.com/poojaboppana/color-flipper">
                    <h1 id="five">5</h1>
                    <div className="project-details">
                            
                            <div id="msdproject">
                               
                                <img src={colorflipper} alt="QuotesApi" id="project-image"/>
                                <h3><span>Color Flipper</span></h3>
                               
            
                                <h4>"I developed a Color Flipper app using HTML, CSS, and JavaScript to generate random background colors."</h4>
                            </div>
                              
                             </div>
                             </a>
                             </div>
                             </section>
            <h1>Medium And Advance Projects</h1>
    <section id="advance">
    <div className="project-wrapper">
    <a href="https://github.com/poojaboppana/React-axios-jokes-app">
                    <h1 id="one">1</h1>
                    <div className="project-details">
    
                            <div id="msdproject">
                               
                                <img src={catalog} alt="Quiz-App" id="project-image"/>
                                <h3><span>Jokes App</span></h3>
                               
            
                                <h4>"I built a jokes app in React using Axios to fetch and display random jokes from an API."</h4>
                            </div>
                              
                             </div>
                             </a>
                             </div>
                             <div className="project-wrapper">
                             <a href="https://github.com/poojaboppana/Quiz_App">
                    <h1 id="two">2</h1>
                    <div className="project-details">

                            <div id="msdproject">
                               
                                <img src={quiz} alt="Quiz-App" id="project-image"/>
                                <h3><span>Quiz App</span></h3>
                               
            
                                <h4>"I created a quiz app using HTML, CSS, and JavaScript with interactive questions and score tracking."</h4>
                            </div>
                            
                             </div>
                             </a> 
                             </div>
                             <div className="project-wrapper">
                             <a href="https://github.com/poojaboppana/Netflix-Landing-Page">
                    <h1 id="three">3</h1>
                    <div className="project-details">
                           
                            <div id="msdproject">
                               
                                <img src={netflix} alt="Netflix" id="project-image"/>
                                <h3><span>Neftlix Landing Page Clone</span></h3>
                               
            
                                <h4>"I created a Netflix landing page clone using HTML and CSS, replicating the design and layout."</h4>
                            </div>
                           
                             </div>
                             </a> 
                             </div>
                             <div className="project-wrapper">
                             <a href="https://github.com/poojaboppana/seating">
                    <h1 id="four">4</h1>
                    <div className="project-details">
             
                            <div id="msdproject">
                               
                                <img src={catalog} alt="attendance" id="project-image"/>
                                <h3><span>Seating Arrangement</span></h3>
                               
            
                                <h4>"I built a seating arrangement system with Node.js, Express, and a dynamic frontend for seat management."</h4>
                            </div>
                            
                             </div>
                             </a> 
                             </div>
                             <div className="project-wrapper">
                             <a href="https://github.com/poojaboppana/Attendance-portal">
                    <h1 id="five">5</h1>
                    <div className="project-details">
                          
                            <div id="msdproject">
                               
                                <img src={attendance} alt="attendance" id="project-image"/>
                                <h3><span>Student Attendance Portal</span></h3>
                               
            
                                <h4>"Web app to manage student attendance with login, marking, and real-time records."</h4>
                            </div>
                             
                              </div>
                              </a> 
                             </div>
                             </section>
                            
            </section>
    );
}
export default Msdprojects;