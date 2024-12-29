import data from "../datamining.png";
import "./Dmtprojects.css";
function Dmtprojects() {
  return (
    <section id="dmtprojects">
      <h1>Data Mining Techniques Projects</h1>
      <a href="https://github.com/poojaboppana/DMT">
                                  <div id="dmtproject">
                                     
                                      <img src={data} alt="dmt" id="projectimage"/>
                                      <h3><span>Classification And Clustering</span></h3>
                                     
                  
                                      <h4>"This project applies data mining techniques, including classification (Decision Tree, SVM, Neural Networks, KNN, Naive Bayes) and clustering (K-Means, K-Medoids, Hierarchical), on the "Buys Computer" dataset to predict and group data for insights."</h4>
                                  </div>
                                   </a> 
    </section>
  );
}
export default Dmtprojects;