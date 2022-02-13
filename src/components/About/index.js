import React from 'react';
import myPicture from '../../assets/images/myPicture.jpg';

function About() {
  return (
    <section id="about-me" class="biography">
      <div class="leftHeader">
        <h2>About Me</h2>
        <img src={myPicture} alt="This is what I look like" />
      </div>
      <div>
        <p>
          My name is Naomi Eckhoff. I've been around computers my entire life. That's not saying much
          anymore, but if it helps my first operating system was ms-dos. It pretty much taught me how to read.
          I've worked on a variety of projects off and on throughout the years. Mostly videogame hacking, but
          every once in a while I'd do something productive. Below this you'll find a few of my past projects.
          I have a favorite, but, well, hacker gotta hack.
        </p>
      </div>
    </section>
  )

}

export default About;