import React from "react";
import "./style.css";
// import BookMartHomepage from "../images/BookMartHomepage.png";
// import codeMe from "../images/code.me.png";
// import weather from "../images/weather.png";
// import workday from "../images/workday-scheduler.png";
import projects from "./projects.js";


function Portfolio() {
  return (
    <div className="margin-bottom ">
    <div className="container cover">
     <div className="row left">
         <h3 className="center-align col">PORTFOLIO</h3>
     </div>
     </div>
     <br/> 
     <div className="container">
        <div className="row">
    {projects.map(project => (
        <div className="col s12 l6 " key={project.id}>
        <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="card-img-top" src={project.image} alt={project.title} href="https://evening-eyrie-42464.herokuapp.com/"/>
        </div>
        <div className="card-content">
            <span className="card-title activator indigo-text text-darken-4">{project.title}<i className="material-icons right">more_vert</i></span>
            <a className="grey-text" href={project.preview}>Live Preview</a>
        </div>
        <div className="card-reveal">
            <span className="card-title indigo-text text-darken-4">{project.title}<i className="material-icons right">close</i></span>
            <p className="red-text darken-4">{project.description} 
            </p>
            <a className="grey-text" href={project.github}>View it on Github</a>
            </div>
        </div>
    </div>
        ))}
                    </div> 
                  
                    </div>
                    <br/>
                    </div>
                

                    
                    
           
 );
}

export default Portfolio;