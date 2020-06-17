import React from "react";
import "./style.css";


function Skills() {
  return (
    <div className="margin-bottom ">
      <div className="container cover">
        <div className="row left">
          <h3 className=" center-align col">Skills & Technology Proficiencies</h3>
        </div>
      </div>
      <br />


      <br />
      <div className="container">
        {/* <div class="cover container cover-home z-depth-4 margin-bottom"> */}
        <div className="row">
          <div className="col">
            <h5> As a full stack developer, I enjoy designing the design experience, building nicely structured back ends, to create the best user experience.</h5>
            <span>
              <a class="social margin-left " href="https://www.google.com/maps/place/Houston,+TX/@29.8159954,-95.9617495,9z/data=!3m1!4b1!4m5!3m4!1s0x8640b8b4488d8501:0xca0d02def365053b!8m2!3d29.7604267!4d-95.3698028"><i class="social-i fas fa-map-marker-alt"> </i> Houston, TX </a>

              <a class="social margin-left " href="mailto:kevans0625@gmail.com"><i class="social-i fas fa-envelope-open-text"></i> kevans0625@gmail.com</a>
              <a class="social margin-left " href="tel:+18323564414"><i class="social-i fas fa-phone-alt"> </i> +1 832-356-4414  </a>
            </span>
            <div />

          </div>
        </div>
        {/* </div> */}

        <div className="col s12 m5">
          <span className="percentages">
            <i className="fab fa-css3-alt home-icons"> <div className="progress">
              <div className="determinate" style={{ "width": "95%" }}> </div>
            </div></i>95&#37;
            <i className="fab fa-html5 home-icons"> <div className="progress">
              <div className="determinate" style={{ "width": "90%" }}> </div>
            </div></i>90&#37;
            <i className="fab fa-js-square home-icons"> <div className="progress">
              <div className="determinate" style={{ "width": "70%" }}> </div>
            </div></i>70&#37;
            <i className="fab fa-react home-icons"><div className="progress">
              <div className="determinate" style={{ "width": "50%" }}> </div>
            </div></i>50&#37;
          </span>
          <br></br>
        </div>
        <div className="col s12 m5">
          <span className="percentages">

          <i className="fab fa-node home-icons"> <div className="progress">
            <div className="determinate" style={{ "width": "85%" }}> </div>
            </div></i>85&#37;
          <i className="fab fa-bootstrap home-icons"> <div className="progress">
            <div className="determinate" style={{ "width": "70%" }}> </div>
            </div></i>100&#37;
          <i className="fab fa-github-square home-icons"> <div className="progress">
            <div className="determinate" style={{ "width": "90%" }}> </div>
            </div></i>90&#37;

         </span>
          <br></br>
        </div>
      </div>
      <br />
      <br />
    </div>





  );
}

export default Skills;