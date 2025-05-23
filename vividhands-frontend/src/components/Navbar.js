import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import './NavigationBar.css';
import { useAuth } from '../context/AuthContext';

const NavigationBar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const cartItems = 3;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-title">
          VividHands
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/marketplace" className="nav-link">Marketplace</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/inspiration" className="nav-link">Inspiration</Nav.Link>
            <Nav.Link as={Link} to="/admin" className="nav-link">Admin</Nav.Link>
          </Nav>

          <Form className="d-flex search-container">
            <FiSearch className="search-icon" />
            <FormControl
              type="search"
              placeholder="Search products..."
              className="search-input"
              aria-label="Search"
            />
          </Form>

          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/cart" className="nav-link cart-icon">
              <FiShoppingBag className="cart-symbol" />
              {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
            </Nav.Link>

            {isAuthenticated ? (
              <NavDropdown
                title={
                  <div className="user-profile">
                    <div className="user-avatar">
                      {user?.email && user.email[0].toUpperCase()}
                    </div>
                  </div>
                }
                align="end"
                className="custom-dropdown"
              >
                <NavDropdown.Item as={Link} to="/profiles" className="dropdown-item">
                  <i className="fas fa-user-circle me-2"></i>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/orders" className="dropdown-item">
                  <i className="fas fa-box me-2"></i>
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Divider className="dropdown-divider" />
                <NavDropdown.Item onClick={handleLogout} className="dropdown-item">
                  <i className="fas fa-sign-out-alt me-2"></i>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className="auth-buttons">
                <Button as={Link} to="/login" className="btn-login">
                  Get Started
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;