import React from "react";
import "./Skills.css";
import clogo from "../assets/c.svg";
import htmllogo from "../assets/html.svg";
import javalogo from "../assets/java.svg";
import javascriptlogo from "../assets/javascript.svg";
import pythonlogo from "../assets/python.svg";
import githublogo from "../assets/github.svg";
import bslogo from "../assets/bootstrap.svg";
import reactlogo from "../assets/react.svg";
import mysqllogo from "../assets/mysql.svg";
import vscodelogo from "../assets/vscode.svg";
import csslogo from "../assets/css-alt.svg";

export default function Skills() {
  const languages = [
    { name: "HTML", img: htmllogo },
    { name: "CSS", img: csslogo },
    { name: "JS", img: javascriptlogo },
    { name: "Java", img: javalogo },
    { name: "C", img: clogo },
    { name: "Python", img: pythonlogo },
    { name: "Bootstrap", img: bslogo },
    { name: "React", img: reactlogo },
    
  ];

  const others =[
    { name: "MySQL", img: mysqllogo },
    { name: "VS Code", img: vscodelogo },
      {name : "Git & GitHub" , img: githublogo}
  ]

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <div className="tech-stack mb-5">
          <h2 className="section-title text-center mb-4">Languages & Frameworks</h2>
          <div className="row g-4 justify-content-center">
            {languages.map((language) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={language.name}>
                <div className="skill-card">
                  <img src={language.img} alt={language.name} className="skill-logo" />
                  <p className="skill-name mt-2">{language.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="others">
          <h2 className="section-title text-center mb-4">Databases & Tools</h2>
          <div className="row g-4 justify-content-center">
            {others.map((tool) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={tool.name}>
                <div className="skill-card">
                  <img src={tool.img} alt={tool.name} className="skill-logo" />
                  <p className="skill-name mt-2">{tool.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
