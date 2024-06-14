import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const StyledNavbar = styled(Navbar)`
  .navbar {
    transition: background-color 0.5s ease-in-out;
  }

  .navbar-toggler {
    border-color: rgba(0,0,0,0.1);
    transition: border-color 0.3s ease-in-out;
  }

  .navbar-toggler:hover {
    border-color: rgba(0,0,0,0.5);
  }

  .navbar-brand img {
    height: 40px;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-brand img:hover {
    transform: scale(1.1);
  }

  .nav-link {
    position: relative;
    transition: color 0.3s ease-in-out;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #000;
    transition: width 0.4s ease-in-out;
    -webkit-transition: width 0.4s ease-in-out;
  }

  .nav-link:hover::after {
    width: 100%;
    left: 0;
    background-color: #007bff;
  }

  .nav-link:hover {
    color: #007bff;
  }
`;

function Home() {
  return (
    <>
      <div style={{ backgroundColor: 'black' }} >
        <StyledNavbar expand="lg" bg="transparent" variant="dark" sticky="top" className="shadow shadow-lg" style={{ backgroundColor: 'rgba(200,200,150,0.2)' }}>
          <Container fluid>
            <Navbar.Brand as={NavLink} to={'/'}>
              <img src="https://www.a2zithub.org/assets/165710745335077275.png" alt="Brand Logo" className='ms-5' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarTogglerDemo03" />
            <Navbar.Collapse id="navbarTogglerDemo03">
              <Nav className="ms-auto mb-2 mb-lg-0">
                <Nav.Link as={NavLink} to={'/'} className="me-5">Home</Nav.Link>
                <Nav.Link as={NavLink} to={'/about-us'} className="me-5">About Us</Nav.Link>
                <Nav.Link as={NavLink} to={'/career'} className="me-5">Career</Nav.Link>
                <Nav.Link as={NavLink} to={'/contact'} className="me-5">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </StyledNavbar>
      </div>
    </>
  );
}

export default Home;
