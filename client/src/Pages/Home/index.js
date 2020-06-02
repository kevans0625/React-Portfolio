import React from "react";


function Home() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <h2 className=" col-md-12">Hi, I am Kris, a full stack developer. I build and design responsive user interfaces.</h2>
        </div>
      {/* <div className="cover"> */}
            <div className="row">
            <span className="home-icons">
            <i className="fab fa-css3-alt home-icons"></i>
            <i className="fab fa-html5 home-icons"></i>
            <i className="fab fa-js-square home-icons"></i>
            <i className="fab fa-node home-icons"></i>
            <i className="fab fa-bootstrap home-icons"></i>
            <i className="fab fa-github-square home-icons"></i>
            
                 </span>
                <br></br>

      {/* </div> */}
      <div className="center-align cover">
                <a href="/about" className="btn center">Enter Here <i className="material-icons">arrow_forward</i></a>
            </div>
            </div>
      </div>

  </div>


 );
}

export default Home;