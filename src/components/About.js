import React from "react";
//images
import img9 from "../img/img-01.jpg";

function About() {
  return (
    <div className="tm-section tm-container-inner">
      <div className="row">
        <div className="col-md-6">
          <figure className="tm-description-figure">
            <img src={img9} alt="pic" className="img-fluid" />
          </figure>
        </div>
        <div className="col-md-6">
          <div className="tm-description-box">
            <h4 className="tm-gallery-title">Maecenas nulla neque</h4>
            <p className="tm-mb-45">
              Redistributing this template as a downloadable ZIP file on any
              template collection site is strictly prohibited. You will need to{" "}
              <a rel="nofollow" href="https://templatemo.com/contact">
                talk to us
              </a>{" "}
              for additional permissions about our templates. Thank you.
            </p>
            <a href="about.html" className="tm-btn tm-btn-default tm-right">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
