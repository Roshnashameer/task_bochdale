import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div> <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Navbar.Brand className='text-white' href="#home">
                            <img
                                alt=""
                                src="https://i.postimg.cc/VkxJQNZt/e-commerce-shopping-cart-software-digital-marketing-woocommerce-png-favpng-uq-A3krvv2s6m-ESYKUAntiws.png"
                                width="50"
                                height="60"
                                className="d-inline-block align-top"
                            />{' '}
                            <b className='fs-1'>Shoppy</b>
                            </Navbar.Brand>
                            </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          
        </Nav>
      </Navbar.Collapse> */}
    </Container>
  </Navbar></div>
  )
}

export default Header