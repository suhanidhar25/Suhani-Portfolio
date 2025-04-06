import React from "react";
import "./skills.css";
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
    <section id="skills">
      <div className="tech-stack">
        <h2 className="mb-4">Languages & Frameworks</h2>
        <div className="row justify-content-center">
          {languages.map((languages) => (
            <div className="col-4 col-md-2 mb-4" key={languages.name}>
              <img src={languages.img} alt={languages.name} className="skill-logo" />
              <p className="mt-2">{languages.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="others">
        <h2 className="mb-4">Databases & Tools</h2>
        <div className="row justify-content-center">
          {others.map((others) => (
              <div className="col-4 col-md-2 mb-4" key={others.name}>
                <img src={others.img} alt={others.name} className="skill-logo" />
                <p className="mt-2">{others.name}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
