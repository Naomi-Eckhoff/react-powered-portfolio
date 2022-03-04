import React, { useState } from 'react';
import filterDatabase from '../../assets/images/filterDatabase.jpg';
import warCalculator from '../../assets/images/warCalculator.jpg';
import Horiseon from '../../assets/images/Horiseon.jpg';
import mealAndMovie from '../../assets/images/mealAndMovie.jpg';
import studious from '../../assets/images/studious.jpg';
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'



const Projects = () => {
  // set modal display state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section id="work" className="past-work">
        <div className="leftHeader">
          <h2>My Work</h2>
        </div>
        <div>
          <h3> My Favorite Creation</h3>

          <Button onClick={handleOpen}>
            <img src={filterDatabase} className="top-project" alt="AAAAAAAAAAAAAAAAA" />
          </Button>
          {/* set modal data up */}
          <Modal
            fade={false}
            style={{ width: "200px", display: "block" }}
            open={open}
            onClose={handleClose}
          >
            {/* tab container to do either signup or login component */}

            <ModalHeader>
              test
              <Modal.Title>
                REEEEE
              </Modal.Title>
            </ModalHeader>
            <ModalBody>
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </ModalBody>
            <ModalFooter>
              WHY U NOT WROK!?
            </ModalFooter>

          </Modal>
          <h3> My Other Projects</h3>
          <div className="other-projects">
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
    </>
  );
};

export default Projects;
