import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Landing from '../Landing';
import Experience from '../Experience';
import Education from '../Education';
import Skills from '../Skills';
import Projects from '../Projects';
import Resume from "../Resume"
import profileData from '../../assets/profileData.json';

const Home = () => {

    const [data] = useState(profileData)
    return (
      <div className="AppPortfolio">
        <Sidebar sidebarData={data.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={data.landingData} />
          <hr className="m-0" />
          <Experience experience={data.work} />
          <hr className="m-0" />
          <Education education={data.education}/>
          <hr className="m-0" />
          <Skills skills={data.skills} />
          <hr className="m-0" />
          <Projects projects={data.projects} />
          <hr className="m-0" />
          <Resume />
        </div>
      </div>
    );
  }

export default Home;
