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
          every once in a while I'd do something productive. The projects link above will take you to a carousel of my past work.
          They are in no particular order and vary pretty widely in function.
        </p>
        <br />
        <p>
          Currently I am working on learning machine learning and python. I like data. There are very few things that make me happier than finding a completely
          insane correlation between two seemingly unrelated things that turns out to be a better predictor of outcome than the old rational estimators.
        </p>
      </div>
    </section >
  )

}

export default About;