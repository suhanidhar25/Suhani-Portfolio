import React from 'react'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'

export default function Projects() {
  const projects = [
    {
      img: work1,
      title: 'To-Do List',
      desc: 'An app which tracks the record of your to-do works in a list form',
      link: 'https://to-do-app-lac-five.vercel.app/'
    },
    
    {
      img: work3,
      title: 'Weather Wise',
      desc: 'Get accurate weather forecasts instantly, no matter where you are!',
      link: 'https://weather-app-kappa-one-87.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="container-fluid px-5 py-5">
      <h2 className="mb-4">My Work</h2>
      
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img src={project.img} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
              </div>
              <div className="card-footer">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
  )
}