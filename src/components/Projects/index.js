import React from 'react';

const Projects = (props) => {

console.log("proj prop" , props)
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          <div className="subheading mb-3">Some noteworthy projects I've worked on</div>
          {
            props.projects.map((prj, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0"><a href={prj.url}>{prj.title}</a></h3>
                  <p>{prj.description}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{prj.timeline}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
}

export default Projects;
