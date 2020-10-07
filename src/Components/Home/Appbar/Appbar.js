import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../logos/Group 1329.png';
import './Appbar.css';

const Appbar = () => {
    
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img className="logo" src={logo} alt=""/>
            </Navbar.Brand>
            <Nav className="mr-auto appLink">
            <Nav.Link href="/home"className="navLink">Home</Nav.Link>
            <Nav.Link href="/login"className="navLink">Donation</Nav.Link>
            <Nav.Link href="/home"className="navLink">Events</Nav.Link>
            <Nav.Link href="/home"className="navLink">Blogs</Nav.Link>
            </Nav>
            <Form inline>
            <Button href="/login" className="appLink" variant="outline-info">Register</Button>
            <Button href="/home" variant="outline-info">Admin</Button>
            </Form>
        </Navbar>
  <br />
  
        </div>
    );
};

export default Appbar;