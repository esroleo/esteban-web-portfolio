import React from 'react';
import profileImage from "../../assets/profile/profile_picture.png";

function About() {
    //my-5 is spacing in react
  return (
    <section className="my-5"> 
      <h1 id="about">About Me?</h1>
      <img src={profileImage} className="my-2" style={{ width: "10%" }} alt="cover" />
      <p>
      Achieving goals together means spending time doing what we love with people we care about. My goal is to do what I love with professionalism that will benefit us both in any future endeavors we work on.
      </p>
      <p>
      I am currently working as an application support analyst at BMO Capital markets. My job entails making sure that our production environment runs smoothly.
      </p>
    </section>
  );
}

export default About;