import React from 'react';

const Resume = (props) => {

console.log("resume prop" , props)
    return(
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="resume">
        <div className="w-100">
          <h2 className="mb-5">Resume</h2>
          <div className="subheading mb-3"><a href="../../assets/SanjitCKS_Resume_Jan2020_v9" download="SanjitCKS_Resume_Jan2020_v9">Download Resume</a></div>
        </div>
      </section>
    );
}

export default Resume;
