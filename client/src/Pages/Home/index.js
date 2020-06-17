import React from "react";
import headshot from "../../components/images/headshot.jpg";



function Home() {
  return (
    <div>
      <div className=" margin-top container">
        <div className="">
          <img className=" circle z-depth-2" style={{ width: "200px" }} src={headshot} alt="headshot" />
        </div>
        <div className="row">
          <h2 className=" col-md-12">Hi, I am Kris, a full stack developer. I build and design responsive user interfaces.</h2>

          <div className="center-align cover">
            <a href="/about" className="btn center">Enter Here <i className="material-icons">arrow_forward</i></a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;