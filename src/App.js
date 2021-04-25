import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import CreateUser from './CreateUser';
import  Home from './Home';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavItemProps, Form, Button, FormControl } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Router>

        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/lists">Users List</Nav.Link>
              <Nav.Link href="/create">Create User</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </>
        {/* Switches */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/lists">
            <Users />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
