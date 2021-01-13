import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Landing = (props) => {
    
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">{props.landingData.firstName}
            <span className="text-primary">{props.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">{props.landingData.phoneNumber} ·
            <a href="mailto:sanjitk2018@gmail.com">{props.landingData.email}</a>
          </div>
          <p className="lead mb-5">{props.landingData.about}</p>
          <div className="social-icons">
            <a href={props.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={props.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={props.landingData.medium}>
              <FontAwesomeIcon icon={faMedium} />
            </a>
            <a href={props.landingData.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    );
}

export default Landing;
