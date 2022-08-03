import React from 'react';
import myPicture from '../../assets/images/myPicture.jpg';

function About() {
  return (
    <section id="about-me" class="biography">
      <div class="leftHeader">
        <h2>About Me</h2>
        <img class="myImg" src={myPicture} alt="This is what I look like" />
      </div>
      <div class="mainContents">
        <h3>About Me</h3>
        <br />
        <p>
          My name is Naomi Eckhoff. I've been around computers my entire life. That's not saying much
          anymore, but if it helps my first operating system was ms-dos. I'm pretty sure it taught me how to read.
          No idea what the letters mean, but this sequence causes that to happen so this combo must mean this word.
          I really should have been better supervised as a child. I still have all my fingers though so I guess it worked out.
        </p>
        <br />
        <p>
          I've worked on a variety of projects off and on throughout the years. Mostly videogame hacking, but
          I enjoy the challenge of web design because there are many ways to solve the same problem. I enjoy trying things until
          I find something that works and sharing it with others. 
        </p>
        <br />
        <p>
          Currently I am working on learning machine learning and python. When it comes to data and machine learning it combines my love of math and
          my joy in finding the missing piece of the puzzle that explains how seemingly unrelated things can be predicted with the right data and equations. 
        </p>
      </div>
    </section >
  )

}

export default About;