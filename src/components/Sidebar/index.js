import React from "react";
import "./Sidebar.css";
import ProfilePic from "../ProfilePicture/ProfilePicture";

const Sidebar = () => {
  return (
    <section id="section-1">
      <div className="row">
        <div className="sidebar col-4 px-1 bg-dark position-fixed" id="sidebar">
          <ProfilePic />
          <div className="myName">Sanjit Kumar</div>
          <div className="designation">
            Full Stack Web Developer and Engineer
          </div>
          <a href="#">Work</a>
          <a href="#">Education</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
        <div className="portfolioContent col offset-4" id="main">
          <div className="container">
            <div className="row section">
              <h2>A Little About Me</h2>
              <p class="desc-body"> I am a Software Engineer, Web Developer and Computer Science Undergrad. I'm a junior majoring in Computer Science and Engineering from VIT, Vellore. I spend most of my time reading, learning, programming and writing about tech. I love building stuff. If you are looking to collaborate on something, do reach out! </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
