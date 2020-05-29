import React from "react";
import "./style.css";

function Navbar() {
  return (
<div>
<nav>
<div className="nav-wrapper">
    <a href="/" className="brand-logo center">Kristin Evans</a>
      {/* <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>    */}
    <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="/about">ABOUT<i className="material-icons">person</i></a></li>
        <li><a href="/portfolio">PORTFOLIO<i className="material-icons">perm_media</i></a></li>
        <li><a href="/contact">CONTACT<i className="material-icons">email</i></a></li>
    </ul>

    <ul id="nav-mobile" className="right hide-on-med-and-down">

        <li><a href="https://www.linkedin.com/in/kristinevans/"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/kevans0625"><i className="fab fa-github"></i></a></li>
        <li><a href="https://drive.google.com/file/d/1Lo6CdplJ6j6gN15EGSMPqNsB4wg1_jAp/view?usp=sharing"><i className="far fa-file-pdf"></i></a></li>
    </ul>
    <a href="/" data-target="slide-out" className="sidenav-trigger button-collapse right"><i className="material-icons">menu</i></a>
</div>
  </nav>
  <ul className="sidenav" id="mobile-demo">
  <li><a href="/about">ABOUT<i className="material-icons">person</i></a></li>
        <li><a href="/portfolio">PORTFOLIO<i className="material-icons">perm_media</i></a></li>
        <li><a href="/contact">CONTACT<i className="material-icons">email</i></a></li>
        <li><a href="https://www.linkedin.com/in/kristinevans/"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/kevans0625"><i className="fab fa-github"></i></a></li>
        <li><a href="https://drive.google.com/file/d/1Lo6CdplJ6j6gN15EGSMPqNsB4wg1_jAp/view?usp=sharing"><i className="far fa-file-pdf"></i></a></li>
  </ul>
</div>
 );
}

export default Navbar;