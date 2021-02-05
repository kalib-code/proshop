import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>Konbersio</Navbar.Brand>

                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <LinkContainer to="/cart">
                        <Nav.Link><i className="fa fa-shopping-cart mr-1"></i>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login"> 
                        <Nav.Link ><i className="fa fa-user mr-1"></i>Sign In</Nav.Link>
                         </LinkContainer>
                           
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
