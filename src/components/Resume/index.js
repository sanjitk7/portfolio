import React from 'react';

const Resume = (props) => {

console.log("resume prop" , props)
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="resume">
        <div className="w-100">
          <h2 className="mb-5">Resume</h2>
          <div className="subheading mb-3"><a href="resume/SanjitKumar_ResumeDec2022_v5.pdf" download="SanjitKumar_Resume">Download Resume</a></div>
        </div>
      </section>
    );
}

export default Resume;
