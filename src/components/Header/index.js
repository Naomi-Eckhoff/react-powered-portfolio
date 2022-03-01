import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Header() {


  return (
    <header>
      <h1>Naomi Eckhoff</h1>
      <nav>
        <ul>
          <li>
            <Nav.Link as={Link} to='/react-powered-portfolio'>
              <span>
                About
              </span>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to='/projects'>
              <span>
                Projects
              </span>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to='/resume'>
              <span>
                Resume
              </span>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link as={Link} to='/contact'>
              <span>
                Contact
              </span>
            </Nav.Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default Header;