import React from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.jpg";

export default function Projects() {
  const projects = [

    {
      img: work4,
      title: "ReportNRepair",
      desc: "A civic issue reporting platform that connects citizens with local authorities to report and resolve issues.",
      link: "https://report-n-repair.vercel.app/",
    },

    

    

    
  ];

  return (
    <section id="projects" className="container-fluid px-5 py-5">
      <h2 className="mb-4">My Work</h2>

      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex" key={index}>
            <div className="card project-card flex-fill">
              <img
                src={project.img}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fas fa-external-link-alt"></i> View
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="mb-4 text-center">
          <a
            href="/Suhani-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info"
          >
            <i className="fas fa-file-alt me-2"></i>View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
