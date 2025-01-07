import React from "react";
import photo from "../assets/images/john-doe-about.jpg";
import "../assets/style/about.css";

// construction de la section "about"

const About = () => {
  return (
    <section className="py-5" id="about">
      <div className="container border-5 rounded-1 shadow p-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-start">
            <h3 className="about-titre">A Propos</h3>
            <div className="mb-5 about-border border-bottom border-3 border-primary"></div>
            <img
              src={photo}
              alt="Photo de John doe"
              className="img-fluid mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque at
              ?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque at
              ?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque at
              ?
            </p>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-start">
            <h3 className="about-titre">Mes compétences</h3>
            <div className="mb-5 about-border border-bottom border-3 border-primary"></div>
            <div className="mb-3">
              <label>HTML5 90%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="mb-3">
              <label>CSS3 80%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="mb-3">
              <label>JAVASCRIPT 70%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="mb-3">
              <label>PHP 60%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div className="mb-3">
              <label>REACT 50%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-infos"
                  role="progressbar"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
