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
        {/* <div className="col s12 l6 ">
        <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="card-img-top" src={BookMartHomepage} alt="BookMartHomepage" href="https://evening-eyrie-42464.herokuapp.com/"/>
        </div>
        <div className="card-content">
            <span className="card-title activator indigo-text text-darken-4">BookMart<i className="material-icons right">more_vert</i></span>
            <a className="grey-text" href="https://kevans0625.github.io/BookMart/">Live Preview</a>
        </div>
        <div className="card-reveal">
            <span className="card-title indigo-text text-darken-4">BookMart<i className="material-icons right">close</i></span>
            <p className="red-text darken-4">An app that uses the MVC paradigm and it’s own server-side API. As a response to the current COVID-19 pandemic, my team and I created a virtual book club. For this project, I was not only in charge of designing a mobile first layout with the
                use of Boostraps’ CSS Framework. I also developed a User Authentication and used Sequelize ORM to store user information, including books they have read.
            </p>
            <a className="grey-text" href="https://github.com/kevans0625/BookMart">View it on Github</a>

        </div>
    </div>
        </div>
        <div className="col s12 l6 ">
        <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light" href="https://kevans0625.github.io/code.me/">
            <img className="card-img-top" src={codeMe} alt="code.me" href="https://kevans0625.github.io/code.me/"/>
        </div>
        <div className="card-content">
            <span className="card-title activator indigo-text text-darken-4">code.me<i className="material-icons right">more_vert</i></span>
            <a className="grey-text" href="https://kevans0625.github.io/Code.me/">Live Preview</a>
        </div>
        <div className="card-reveal">
            <span className="card-title indigo-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p className="red-text darken-4">This is a simplistic code challenge application created to assist developers with improve coding skills with daily random generated challenges of a chosen difficulty (Easy, Medium, Hard). This project is currently in the development stage.
            </p>
            <a className="grey-text" href="https://github.com/kevans0625/Code.me/">View it on Github</a>
        </div>
    </div>
 </div>
        <div className="col s12 l6 ">

        <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="card-img-top" src={weather} alt="Weather Dashboard Homepage" href="https://kevans0625.github.io/Weather-Dashboard/"/>
        </div>
        <div className="card-content">
            <span className="card-title activator indigo-text text-darken-4">Weather Dashboard<i className="material-icons right">more_vert</i></span>
            <a className="grey-text" href="https://kevans0625.github.io/Weather-Dashboard/">Live Preview</a>
        </div>
        <div className="card-reveal">
            <span className="card-title indigo-text text-darken-4">Weather Dashboard<i className="material-icons right">close</i></span>
            <p className="red-text darken-4">I was challenged to build a weather dashboard that will run in the browser and feature dynamically updated HTML, CSS and JQuery. This app uses a server-side API OpenWeather API to retrieve weather data for cities.
            </p>
            <a className="grey-text" href="https://github.com/kevans0625/Weather-Dashboard">View it on Github</a>

        </div>
    </div>
    </div>   
    <div className="col s12 l6 ">
    <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="card-img-top" src={workday} alt="workday-scheduler" href="https://kevans0625.github.io/Work-Day-Scheduler/"/>
        </div>
        <div className="card-content">
            <span className="card-title activator indigo-text text-darken-4">Workday Scheduler<i className="material-icons right">more_vert</i></span>
            <a className="grey-text" href="https://kevans0625.github.io/Work-Day-Scheduler/">Live Preview</a>
        </div>
        <div className="card-reveal">
            <span className="card-title indigo-text text-darken-4">Workday Scheduler<i className="material-icons right">close</i></span>
            <p className="red-text darken-4">This is a simple calendar app that allows users to save events for every hour of the work day. It runs in the browser and feature are dynamically updated with HTML and CSS powered by jQuery.</p>
      
            <a className="grey-text" href="https://github.com/kevans0625/Work-Day-Scheduler">View it on Github</a>

        </div>
</div>

        </div> */}
                    </div> 
                  
                    </div>
                    <br/>
                    </div>
                

                    
                    
           
 );
}

export default Portfolio;