import React from "react";
import profileImg from "../assets/portfolio_pfp.jpg";
import "./About.css";

export default function About() {
  return (
    <section id="aboutme" className="container-fluid px-3 px-sm-4 px-md-5 py-5">
      <div className="row align-items-center gy-5">
        <div className="col-lg-8 order-2 order-lg-1">
          <div className="fs-5 lh-lg">
            <h2 className="mb-4 fw-bold">About Me</h2>
            <p className="fs-5 lh-lg text-white">
              As an aspiring Full Stack Developer and current undergraduate
              student, I specialize in creating responsive and intuitive web
              applications. My focus lies in modern web development technologies
              including React.js, JavaScript, and various CSS frameworks. With a
              strong foundation in frontend fundamentals and an eye for detail,
              I strive to deliver clean, efficient, and maintainable code.
            </p>
          </div>

          <div className="mt-4 mt-lg-5" id="education">
            <h3 className="mb-4 fw-bold">Educational Background</h3>
            <div className="timeline">
              <div className="mb-4 text-white">
                <h5 className="fw-semibold">BCA</h5>
                <p className="mb-1">Techno Main Salt Lake | 2023 - 2027</p>
                <p className="fst-italic">Currently pursuing</p>
              </div>

              <div className="mb-4 text-white">
                <h5 className="fw-semibold">ICSE (Class X)</h5>
                <p className="mb-1">National Gems H.S School | 2009 - 2021</p>
                <p className="fst-italic">Scored 93.6%</p>
              </div>

              <div className="mb-4 text-white">
                <h5 className="fw-semibold">ISC (Class XII)</h5>
                <p className="mb-1">National Gems H.S School | 2021 - 2023</p>
                <p className="fst-italic">Scored 91%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 order-1 order-lg-2">
          <div className="card border-0 shadow-sm profile-card mx-auto">
            <div className="card-img-wrapper">
              <img
                src={profileImg}
                className="card-img-top rounded"
                alt="Suhani Dhar"
              />
            </div>
            <div className="card-body text-center py-4">
              <h4 className="card-title fw-bold mb-3">Suhani Dhar</h4>
              <p className="card-text text-muted mb-3">Frontend Developer</p>
              <div className="d-flex justify-content-center gap-4">
                <a
                  href="https://www.linkedin.com/in/suhani-dhar-b15909265/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="https://github.com/suhanidhar25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
