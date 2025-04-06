import React from "react";
import profileImg from "../assets/suhani_Dp.jpg";
import "./About.css";

export default function About() {
  return (
    <section id="aboutme" className="container-fluid px-5 py-5">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h2 className="mb-3">About Me</h2>
          <p className="fs-4 fst-italic">
            I'm a second-year student and frontend developer with a passion for
            building clean, responsive, and user-friendly web interfaces. I
            enjoy working with modern tools like React, Vite, and Bootstrap to
            bring ideas to life. Always eager to learn and grow, I'm constantly
            exploring new technologies and sharpening my skills through hands-on
            projects.
          </p>

          <div className="mt-4 fs-4" id="education">
            <h4 className="text-warning fs-2 fst-italic">Education</h4>
            <ul>
              <li>
                <strong>2009-2021:</strong> National Gems H.S School (ICSE -
                93.6%)
              </li>
              <li>
                <strong>2021-2023:</strong> National Gems H.S School (ISC - 91%)
              </li>
              <li>
                <strong>2023-2027:</strong> Techno Main Salt Lake
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-4 p-5">
          <div className="card">
            <img
              src={profileImg}
              className="card-img-top"
              alt="Suhani Dhar profile"
            />
            <div className="card-body text-center" id="card-text">
              <h4 className="card-title">Suhani Dhar</h4>
              <p className="card-text" id="card-text">
                Connect With Me
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="https://www.linkedin.com/in/suhani-dhar-b15909265/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/suhanidhar25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.facebook.com/suhani.dhar.25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/_.suhani25._/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
