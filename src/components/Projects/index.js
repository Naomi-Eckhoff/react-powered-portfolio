import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import filterDatabase from '../../assets/images/filterDatabase.jpg';
import warCalculator from '../../assets/images/warCalculator.jpg';
import mealAndMovie from '../../assets/images/mealAndMovie.jpg';
import studious from '../../assets/images/studious.jpg';
import subtrackt from '../../assets/images/subtrackt.jpg';
import hatchwaysFrontEnd from '../../assets/images/hatchwaysFrontEnd.png';
import hatchwaysMessenger from '../../assets/images/hatchwaysMessenger.png';

const items = [
  [
    <h3>Access Filter Database Form Generator</h3>,
    <a href="https://github.com/Naomi-Eckhoff/filter-condition-access/tree/main" target="_blank" rel="noreferrer">
      <img src={filterDatabase}
        alt="A small program written in VB and SQL to report the status of filters" class="topProject" />
    </a>,
    <div>
      <p>
        This is my favorite project. Not necessarily because I'm proud of it, but more because it was the single most frustrating thing I've ever made.
      </p>
      <p>
        It takes data gathered on the conditions of roughly 300 filters. With the press of a button marks which filters are going bad, which are bad, and creates a pdf
        with the relevant data for the team responsible for changing them.
      </p>
      <p>
        It was written using VB and SQL, but Microsoft Access limits SQL in a number of extremely frustrating ways. I cannot count the number of times I got the error message "SQL statement is too complex".
        Since it was built to link to a form I couldn't build the tables in a way that was good as Access only lets you use one record at a time. Multiplying the filters by the data associated, without normalization,
        results in about 8000 fields. After normalization I managed to get that down to around 1200 again not good. If it wasn't for that single record rule Access has then it would be 301 fields for storage.
        There is an additional table that stores information on each filter that doesn't really change with around 300 records and, I think, 18 fields.
      </p>
      <p>
        So 1 table with 1200 fields sounds pretty bad, but it could be worse. It is in fact worse. Access has 3 other rules that ruin your day.
      </p>
      <p>
        Rule 2, tables cannot be more than 255 fields. So, instead of 2 tables, you get to a minimum of 6.
      </p>
      <p>
        Rule 3, if you join 2 tables and access them with a form those 2 table's fields added together cannot be greater than 255 even if you aren't using all of the fields. So, now you're at 8 tables. 
      </p>
      <p>
        Rule 4, Access does not have a transpose function for SQL. So, in order to use the the table with 18 fields, that's actually decent, you have to make a 9th table to
        execute a homebrew transpose function across the other 7 tables. This table is promptly deleted as it shouldn't have needed to exist in the first place.
      </p>
      <p>
        Making this program was an exercise in bashing my head against a wall, and everytime I came up with something clever Access would tell me I wasn't allowed to do that.
        So yeah, this is my favorite creation. I like it when the computer fights me. It's just fun.
      </p>
    </div>,
    <a href="https://github.com/Naomi-Eckhoff/filter-condition-access/tree/main" target="_blank" rel="noreferrer">
      <p>
        Repository Link
      </p>
    </a>
  ],
  [
    <h3>War Game Calculator</h3>,
    <a 
      href="https://docs.google.com/spreadsheets/d/1WPKTcP0T9pA5KS8s5LACuwLPzzkwvt4Z_Opq-1ydHnc/edit?usp=sharing" target="_blank" rel="noreferrer">
      <img src={warCalculator}
        alt="A google sheets document written to calculate optimal troop formations for an online game" />
    </a>,
    <div>
      <p>
        This is an excel spreadsheet I spent nearly 6 months developing to optimize warfare in an online game.
      </p>
      <p>
        The math gets complex and I did not include the regression analysis necessary to find some of the formulas. Other formulas were generated via trial and error.
        There is a great deal of internal logic and it boasted performance that surpassed or parred the most experienced players in the game.
      </p>
      <p>  
        While this project is more math than coding I encourage you to click around the cells and shun me for being an obsessive nerd.
      </p>
    </div>,
    <a href="https://docs.google.com/spreadsheets/d/1WPKTcP0T9pA5KS8s5LACuwLPzzkwvt4Z_Opq-1ydHnc/edit?usp=sharing" target="_blank" rel="noreferrer">
      <p>
        Deployed Link
      </p>
    </a>
  ],
  [
    <h3>Hatchways Messenger Assessment</h3>,
    <a href="https://github.com/Naomi-Eckhoff/f5470f" target="_blank" rel="noreferrer">
      <img src={hatchwaysMessenger}
        alt="A rework of an online instant messenging application" />
    </a>,
    <div>
      <p>
        placeholder
      </p>
    </div>,
    <a href="https://github.com/Naomi-Eckhoff/f5470f" target="_blank" rel="noreferrer">
      <p>
        Repository Link
      </p>
    </a>
  ],
  [
    <h3>Hatchways Front End</h3>,
    <a 
      href="https://naomi-eckhoff.github.io/hatchways-front-end/" target="_blank" rel="noreferrer">
      <img src={hatchwaysFrontEnd} alt="An application too look up and tag preexisting people" />
    </a>,
    <div>
      <p>
        Placeholder text    
      </p>
    </div>,
    <a href="https://naomi-eckhoff.github.io/hatchways-front-end/" target="_blank" rel="noreferrer">
      <p>
        Deployed Link
      </p>
    </a>,
    <a href="https://github.com/Naomi-Eckhoff/hatchways-front-end" target="_blank" rel="noreferrer">
      <p>
        Repository Link
      </p>
    </a>,
  ],
  [
    <h3>Studious</h3>,
    <a 
      href="https://protected-dusk-79081.herokuapp.com/" target="_blank" rel="noreferrer">
      <img src={studious} alt="" />
    </a>,
    <div>
      <p>
        Studious was a group project designed to connect students and teachers for the purposes of classes and meetings. It makes use of sql for its back end. Overall it's pretty simple.
      </p>
    </div>,
    <a href="https://protected-dusk-79081.herokuapp.com/" target="_blank" rel="noreferrer">
      <p>
        Deployed Link
      </p>
    </a>,
    <a href="https://github.com/kcbryan10/Studious" target="_blank" rel="noreferrer">
      <p>
        Repository Link
      </p>
    </a>,
  ],
  [
    <h3>Subtrackt</h3>,
    <a 
      href="https://quiet-wildwood-89723.herokuapp.com/" target="_blank" rel="noreferrer">
      <img src={subtrackt} alt="" />
    </a>,
    <div>
      <p>
        Subtrackt was a group project using the MongoDB, Express, React, and NodeJS to track subscriptions and find tv shows and movies that are available on those subscriptions.
        Just a basic budgetary website.
      </p>
    </div>,
    <a href="https://quiet-wildwood-89723.herokuapp.com/" target="_blank" rel="noreferrer">
      <p>
        Deployed Link
      </p>
    </a>,
    <a href="https://github.com/ramantv/Subscription-Tracker" target="_blank" rel="noreferrer">
      <p>
        Repository Link
      </p>
    </a>,
  ],
  [
    <h3>Dinner And A Movie</h3>,
    <a 
      href="https://baxters4karma.github.io/recipe-maker/" target="_blank" rel="noreferrer">
      <img src={mealAndMovie} alt="Meal and Movie Group Project" />
    </a>,
    <div>
      <p>
        This was the first group project we did at our boot camp. It's designed to select a random movie and meal based off of genre and meal type.
        It lacks a database and uses local storage.
      </p>
    </div>,
    <a href="https://baxters4karma.github.io/recipe-maker/" target="_blank" rel="noreferrer">
      <p>
        Deployed Link
      </p>
    </a>,
    <a href="https://github.com/christinedbaxter/recipe-maker" target="_blank" rel="noreferrer">
      <p>
        Repository Link
      </p>
    </a>,
  ],
];

const renderSlideInfo = ({ item, itemsCount }) => {
  return `${item}\\${itemsCount}`;
};

const renderDotsItem = ({ isActive }) => {
  return isActive ? 'x' : 'o';
};

const renderPrevButton = ({ isDisabled }) => {
  return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>Previous</span>;
};

const renderNextButton = ({ isDisabled }) => {
  return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>Next</span>;
};

function Projects() {
  return (
    <section id="work" class="past-work">

      <div class="leftHeader">
        <h2>My Work</h2>
      </div>
      <div class="mainContents">
        <h3> My Projects</h3>
        <div class="carouselHolding">
          <AliceCarousel
            mouseTracking
            items={items}
            disableSlideInfo={false}
            renderSlideInfo={renderSlideInfo}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            renderDotsItem={renderDotsItem}
          />
        </div>
      </div>
    </section>
  )

}

export default Projects;