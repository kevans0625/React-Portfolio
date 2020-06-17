import React from "react";
import "./style.css";
import headshot from "../../components/images/headshot.jpg";

function About() {
  return (
    <div className="margin-bottom ">
   <div className="container cover">
    <div className="row left">
        <h3 className="center-align col">ABOUT ME</h3>
    </div>
    </div>
    <br/> 
    <div className="container">
    {/* <div className=" z-depth-2 margin-bottom"> */}
        <div className="row">
        <div className="col s12 m6 l4">
            <h4 className=""><strong >KRIS EVANS</strong></h4>
                <h6>
                    Junior Web Developer
                </h6>
                <div/>
            {/* <div className="col s12 m6 l4"> */}
                <img className=" circle headshot center z-depth-2" src={headshot} alt="headshot"/>

         
                <div className="row">
                    <span className="col center ">
                            <a className="social margin-left" href="https://www.google.com/maps/place/Houston,+TX/@29.8159954,-95.9617495,9z/data=!3m1!4b1!4m5!3m4!1s0x8640b8b4488d8501:0xca0d02def365053b!8m2!3d29.7604267!4d-95.3698028"><i className="social-i fas fa-map-marker-alt"></i> Houston, TX</a>
                           <br/> <a  className="social margin-left" href="mailto:kevans0625@gmail.com"><i className="social-i fas fa-envelope-open-text"></i> kevans0625@gmail.com</a>
                           <br/>  <a  className="social margin-left" href="tel:+18323564414"><i className="social-i fas fa-phone-alt"> </i> +1 832-356-4414</a>
                        </span>
                </div>
                </div>
                    {/* </div> */}
            {/* </div> */}

            <div className="col s12 m6 l7">
                <h5 className=""><strong >WHO AM I?</strong></h5>
                <h6>
                    I'm a web designer and full stack developer with a background in digital marketing. I am currently based in Houston, Texas. I have a passion for creating responsive web application. I combine my coding skills with my online marketing skills.
                </h6>

                <h5 className=""><strong>WHAT CAN I DO?</strong></h5>

                <h6>My background is in digital marketing so my goal is to not only create your website that runs on the latest technology but I focus on making websites that are engaging and get noticed.</h6>

                <h5 className=""><strong>NEED PROJECT ASSISTANCE?</strong></h5>
                <h6>If you have a project that you want to get started, need assistance with one in progress or just want to link up then get in touch.</h6>
                <br/>
                <div className="row">
                    <div className="col s12 m6 l7 center">
                        <a className="btn center" href="contact.html">MESSAGE ME <i className="material-icons">email</i></a>

                    
                    </div>

                   
                    </div>         
                    </div>
                    </div>
                    </div>
                    <br/>
                     </div>
                    
                  
                    
 );
}

export default About;