import React from 'react';
import filterDatabase from '../../assets/images/filterDatabase.jpg';
import warCalculator from '../../assets/images/warCalculator.jpg';
import mealAndMovie from '../../assets/images/mealAndMovie.jpg';
import studious from '../../assets/images/studious.jpg';
import subtrackt from '../../assets/images/subtrackt.jpg';

function Projects() {
  return (
    <section id="work" class="past-work">
      <div class="leftHeader">
        <h2>My Work</h2>
      </div>
      <div>
        <h3> My Favorite Creation</h3>
        <h4>Access Filter Database Form Generator</h4>
        <a href="https://github.com/Naomi-Eckhoff/filter-condition-access/tree/main" target="_blank">
          <img src={filterDatabase}
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
        <a href="https://github.com/Naomi-Eckhoff/filter-condition-access/tree/main" target="_blank"><p>Repository Link</p></a>
        <h3> My Other Projects</h3>
        <div class="other-projects">
          <table>
            <div>
              <h3>War Game Calculator</h3>
              <a
                href="https://docs.google.com/spreadsheets/d/1WPKTcP0T9pA5KS8s5LACuwLPzzkwvt4Z_Opq-1ydHnc/edit?usp=sharing" target="_blank">
                <img src={warCalculator}
                  alt="A google sheets document written to calculate optimal troop formations for an online game" />
              </a>
              <p>This is an excel spreadsheet I spent nearly 6 months developing to optimize warfare in an online game. The math gets incredibly complex and I did not include the regression analysis necessary to find some of the formulas. Other formulas were generated via trial and error. This serves as an example of how my mind works when presented with an extremely large and complex problem. It boastered performance that surpassed or parred the most experienced players in the world. They wanted to keep their formations secret. I gave power to the people.</p>
              <a href="https://docs.google.com/spreadsheets/d/1WPKTcP0T9pA5KS8s5LACuwLPzzkwvt4Z_Opq-1ydHnc/edit?usp=sharing" target="_blank"><p>Deployed Link</p></a>
            </div>
            <div>
              <h3>Studious</h3>
              <a href="https://protected-dusk-79081.herokuapp.com/" target="_blank">
                <img src={studious} alt="" />
              </a>
              <p>Studious was a group project designed to connect students and teachers for the purposes of classes and meetings. It makes use of sql for its back end.</p>
              <a href="https://protected-dusk-79081.herokuapp.com/" target="_blank"><p>Deployed Link</p></a>
              <a href="https://github.com/kcbryan10/Studious" target="_blank"><p>Repository Link</p></a>
            </div>
            <div>
              <h3>Subtrackt</h3>
              <a href="https://quiet-wildwood-89723.herokuapp.com/" target="_blank">
                <img src={subtrackt} alt="" />
              </a>
              <p>Subtrackt was a group project using the MERN stack to track subscriptions and find tv shows and movies that are available on those subscriptions</p>
              <a href="https://quiet-wildwood-89723.herokuapp.com/" target="_blank"><p>Deployed Link</p></a>
              <a href="https://github.com/ramantv/Subscription-Tracker" target="_blank"><p>Repository Link</p></a>
            </div>
            <div>
              <h3>Dinner And A Movie</h3>
              <a href="https://baxters4karma.github.io/recipe-maker/" target="_blank">
                <img src={mealAndMovie} alt="Meal and Movie Group Project" />
              </a>
              <p>This was the first group project we did at our boot camp. It's fairly basic lacking even a database. It uses local storage for most of it's data purposes.</p>
              <a href="https://baxters4karma.github.io/recipe-maker/" target="_blank"><p>Deployed Link</p></a>
              <a href="https://github.com/christinedbaxter/recipe-maker" target="_blank"><p>Repository Link</p></a>
            </div>
          </table>
        </div>
      </div>
    </section>
  )

}

export default Projects;