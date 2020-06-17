import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import image1 from "../images/headshot.jpg";
import image2 from "../images/joel-filipe-rG1LNUFgJhI-unsplash.jpg";

class Sidenav extends Component {
  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    M.Sidenav.init(this.Sidenav);

    let instance = M.Sidenav.getInstance(this.Sidenav);
    // instance.open();
    // console.log(instance.isOpen);
  }
  render() {
    return (
      <div>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav;
          }}
          id="slide-out"
          className="sidenav"
        >
          <li>
            <div className="user-view">
              <div className="background">
                <img src={image2} />
              </div>
              <a href="#user">
                <img className="circle" src={image1} />
              </a>
              <a href="#name">
                <span className="name">Kristin Evans</span>
              </a>
              <a href="#email">
                <span className="email">kevans0625@gmail.com</span>
              </a>
            </div>
          </li>
          
      <li><a href="/about">ABOUT<i className="material-icons">person</i></a></li>
        <li><a href="/portfolio">PORTFOLIO<i className="material-icons">perm_media</i></a></li>
        <li><a href="/contact">CONTACT<i className="material-icons">email</i></a></li>
        <li>
            <div className="divider" />
          </li>
        <li><a href="https://www.linkedin.com/in/kristinevans/">Linkedin<i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/kevans0625">Github<i className="fab fa-github"></i></a>
        <a href="https://drive.google.com/file/d/1Lo6CdplJ6j6gN15EGSMPqNsB4wg1_jAp/view?usp=sharing">Resume<i className="far fa-file-pdf"></i></a></li>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default Sidenav;
