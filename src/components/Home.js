import "./Home.css";
import pooja from "../pooja.png"; 

function Home() {
    return (
        <div className="Home">
            <nav>
                <ul>
                    <li><a href="#about" className="button-92">About</a></li>
                    <li><a href="#blogs" className="button-92">Blogs</a></li>
                    <li><a href="#projects" className="button-92">Projects</a></li>
                    <li><a href="#contact" className="button-92">Contact</a></li>
                </ul>
            </nav>
            <section id="about">
                <img src={pooja} alt="pooja" id="home-image"/> 
                <p>This is the About section.</p>
            </section>
            <section id="blogs">
                <h2>Blogs</h2>
                <p>This is the Blogs section.</p>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <p>This is the Projects section.</p>
            </section>
            <section id="contact">
               <div id="contact-form">
                  <h1 id="heading">Contact me!!</h1>
                    <form>
                        
                        <input type="text" id="name" placeholder="Enter your name" name="name" required/><br></br>
                        <input type="email" id="email" placeholder="Enter your Email" name="email" required/><br></br>
                        <textarea id="message" placeholder="Enter the Message" name="message" required></textarea><br></br>
                        <button type="submit" className="button" >Submit</button>
                    </form>
               </div>
            </section>
        </div>
    );
}

export default Home;
