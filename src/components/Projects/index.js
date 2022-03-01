import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import filterDatabase from '../../assets/images/filterDatabase.jpg';
import warCalculator from '../../assets/images/warCalculator.jpg';
import Horiseon from '../../assets/images/Horiseon.jpg';
import mealAndMovie from '../../assets/images/mealAndMovie.jpg';
import studious from '../../assets/images/studious.jpg';


const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="work" class="past-work">
        <div class="leftHeader">
          <h2>My Work</h2>
        </div>
        <div>
          <h3> My Favorite Creation</h3>

          <Nav.Link onClick={() => setShowModal(true)}>
            <img src={filterDatabase} class="top-project" />
          </Nav.Link>

          <h3> My Other Projects</h3>
          <div class="other-projects">
            <div>
              <a
                href="https://docs.google.com/spreadsheets/d/1WPKTcP0T9pA5KS8s5LACuwLPzzkwvt4Z_Opq-1ydHnc/edit?usp=sharing">
                <img src={warCalculator}
                  alt="A google sheets document written to calculate optimal troop formations for an online game" />
              </a>
            </div>
            <div>
              <a href="https://github.com/Naomi-Eckhoff/horiseon-landing-page-challenge-1">
                <img src={Horiseon} alt="Horiseon html refactor" />
              </a>
            </div>
            <div>
              <a href="https://baxters4karma.github.io/recipe-maker/">
                <img src={mealAndMovie} alt="Meal and Movie Group Project" />
              </a>
            </div>
            <div>
              <a href="https://protected-dusk-79081.herokuapp.com/">
                <img src={studious} alt="" />
              </a>
            </div>
          </div>

        </div>
      </section>
      {/* set modal data up */}
      <Modal>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>

            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
