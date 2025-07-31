import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaHome, FaSignInAlt, FaShoppingCart, FaBalanceScale, FaEllipsisV } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import '../App.css'; // Make sure your CSS contains the custom styles

function Header() {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom shadow-sm">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="#">
          <img
            src="/logo192.png"
            alt="Pashushala Logo"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold text-uppercase text-black">PASHUSHALA</span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto align-items-center">
            <li className="border-end">
              <Nav.Link href="#" className="text-black">
                <FaHome className="me-1 pashu-icon" /> PashuBazaar
              </Nav.Link>
            </li>
            <li className="border-end">
              <Nav.Link href="#" className="text-black">
                <FaSignInAlt className="me-1 pashu-icon" /> Sign In
              </Nav.Link>
            </li>
            <li className="border-end">
              <Nav.Link href="#" className="text-black">
                <FaBalanceScale className="me-1 pashu-icon" /> Sell
              </Nav.Link>
            </li>
            <li className="border-end">
              <Nav.Link href="#" className="text-black">
                <FaShoppingCart className="me-1 pashu-icon" /> PashuKart
              </Nav.Link>
            </li>
            <li className="border-end">
              <Nav.Link href="#" className="text-black">
                <i className="bi bi-calculator me-1 pashu-icon"></i> Ration Calculator
              </Nav.Link>
            </li>
            <NavDropdown
              title={
                <span className="text-black">
                  <FaEllipsisV className="me-1 pashu-icon" /> More
                </span>
              }
              id="more-dropdown"
            >
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="d-flex align-items-center text-black">
              <select className="form-select form-select-sm me-2" style={{ width: '90px' }}>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <BsPersonCircle size={24} className="pashu-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
