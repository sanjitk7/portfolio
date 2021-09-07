import React from 'react';

const Achievements = (props) => {

    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="achievements">
        <div className="w-100">
          <h2 className="mb-5">Achievements</h2>
          {
            props.achievements.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0"><a href={data.schoolWebsite}>{data.school}</a></h3>
                  <div className="subheading mb-3">{data.degree}</div>
                  <p>{data.grade}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{data.fromDate} - {data.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }

export default Education;
