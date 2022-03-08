import React from 'react';
import myPicture from '../../assets/images/myPicture.jpg';
import KUCert from '../../assets/images/KUCert.jpg';

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
          every once in a while I'd do something productive. The links above will lead you to some of my past projects.
        </p>
        <br />
        <p>
          Statement from my spouse about this site, "You shouldn't make it yellow. It looks like pee."
          I very much like my pee color scheme.
        </p>
        <br />
        <img src={KUCert} alt="This is the certificate from KU's coding bootcamp" class="certifications" />
      </div>
    </section >
  )

}

export default About;