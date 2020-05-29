import React from "react";
import "./style.css";


function Contact() {
  return (
    <div className="margin-bottom ">
    <div className="container cover">
     <div className="row left">
         <h3 className="center-align col">PORTFOLIO</h3>
     </div>
     </div>
     <br/> 


     <br/> 
     <div className="container">
    {/* <div class="cover container cover-home z-depth-4 margin-bottom"> */}
     <div className="row">
        <div className="col">
        <h5> Got a question? Want to collab? I'd love to hear from you. Send me a message, and I will be in touch as soon as I can.</h5>
                <span>
                        <a class="social margin-left " href="https://www.google.com/maps/place/Houston,+TX/@29.8159954,-95.9617495,9z/data=!3m1!4b1!4m5!3m4!1s0x8640b8b4488d8501:0xca0d02def365053b!8m2!3d29.7604267!4d-95.3698028"><i class="social-i fas fa-map-marker-alt"> </i> Houston, TX </a>
                       
                       <a  class="social margin-left " href="mailto:kevans0625@gmail.com"><i class="social-i fas fa-envelope-open-text"></i> kevans0625@gmail.com</a>
                     <a  class="social margin-left " href="tel:+18323564414"><i class="social-i fas fa-phone-alt"> </i> +1 832-356-4414  </a>
                    </span>
                <div/>
          
                </div>
                    </div>
            {/* </div> */}

            <div className="col s12 m5">
            <form action="mailto:you@yourdmainhere.com" method="post" enctype="text/plain">
                        Name:<input type="text" name="FirstName" placeholder="Jane Smith"/> 
                        Email: <input type="text" name="Email" placeholder="example@gmail.com"/>
                        <input type="text" name="Message" placeholder="Tell me all about this project."/>
                        <input type="submit" name="submit" value="Submit" class="btn"/>
                    </form>
                    </div>
                    </div>
                    <br/>
                    <br/>
                    </div>
      
         
        
        
           
 );
}

export default Contact;