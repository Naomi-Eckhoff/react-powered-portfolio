import React from 'react';

function Project() {
  return (
    <section id="work" class="past-work">
      <div class="leftHeader">
        <h2>My Work</h2>
      </div>
      <div>
        <h3> My Favorite Creation</h3>
        <a href="https://github.com/Naomi-Eckhoff/filter-condition-access/tree/main">
          <img src="./assets/images/filterDatabase.jpg"
            alt="A small program written in VB and SQL to report the status of filters" class="top-project" />
        </a>
        <p>
          Favorite being a very strong word here due to the evil it crawled from. It's meant to run on Microsoft Access
          and is written in
          VB and SQL.
          It takes data gathered on the conditions of roughly 300 filters then with the press of a button does all the
          thinking for you.
          Nothing has made me bang my head against the wall quite as hard as this one, but it is fully functional. So the
          wall lost that
          battle.
        </p>
      </div>
      <h3> My Other Projects</h3>
      <div class="other-projects">
        <div>
          <a
            href="https://docs.google.com/spreadsheets/d/1WPKTcP0T9pA5KS8s5LACuwLPzzkwvt4Z_Opq-1ydHnc/edit?usp=sharing">
            <img src="./assets/images/warCalculator.jpg"
              alt="A google sheets document written to calculate optimal troop formations for an online game" />
          </a>
        </div>
        <div>
          <a href="https://github.com/Naomi-Eckhoff/horiseon-landing-page-challenge-1">
            <img src="./assets/images/Horiseon.jpg" alt="Horiseon html refactor" />
          </a>
        </div>
        <div>
          <a href="https://baxters4karma.github.io/recipe-maker/">
            <img src="./assets/images/mealAndMovie.jpg" alt="Meal and Movie Group Project" />
          </a>
        </div>
        <div>
          <a href="https://protected-dusk-79081.herokuapp.com/">
            <img src="./assets/images/studious.jpg" alt="" />
          </a>
          <a href="https://github.com/kcbryan10/Studious">
            Github
          </a>

        </div>
      </div>
    </section>
  )

}

export default Project;