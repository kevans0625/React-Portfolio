import React from "react";
import "./style.css";
import Sidenav from "../SideNav/sidenanv";

function Navbar() {
  return (
<div>
<nav>
<div className="nav-wrapper">
    <a href="/" className="brand-logo center"></a>
      {/* <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>    */}
    <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="/about"><i class="fas fa-user-shield"></i>  ABOUT</a></li>
        <li><a href="/portfolio"><i class="fas fa-briefcase"></i>  PORTFOLIO</a></li>
        <li><a href="/contact"><i class="fas fa-envelope-open-text"></i>  CONTACT</a></li>
        <li><a href="/skills"><i class="fas fa-tools"></i> SKILLS</a></li>
    </ul>

    <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://www.linkedin.com/in/kristinevans/"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/kevans0625"><i className="fab fa-github"></i></a></li>
        <li><a href="https://docs.google.com/document/d/e/2PACX-1vR3gK_SGb4d1QHzhJCMmDIsyg9kKnGU-R1pCpex8TNVg3B7eekpsnZFt2W2HhmXaGt-Lthvb0LmxKxa/pub"><i className="far fa-file-pdf"></i></a></li>
   
   
        </ul>
    <Sidenav/>
    </div>
  </nav>
</div>
 );
}

export default Navbar;