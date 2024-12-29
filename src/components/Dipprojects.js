import lung from "../lung.jpg";
import "./Dipprojects.css";
function Dipprojects() {
  return (
    <section id="dipprojects">
      <h1>Digital Image Processing Projects</h1>
      <a href="https://github.com/poojaboppana/Lung-cancer-detection-using-image-processing-">
                                  <div id="dipproject">
                                     
                                      <img src={lung} alt="Quiz-App" id="projectimage"/>
                                      <h3><span>Lung Cancer Detection</span></h3>
                                     
                  
                                      <h4>"The <bold>Lung Cancer Detection</bold> Project uses image processing to classify medical images into `benign`, `malignant`, and `normal` categories, helping in early detection and diagnosis of lung cancer."</h4>
                                  </div>
                                   </a> 
    </section>
  );
}
export default Dipprojects;