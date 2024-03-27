import {Container, Nav, Navbar, Carousel, Image } from 'react-bootstrap';
import { useState } from "react";
import './App.css';
import data from './data.js';

function App() {

  let [newjeans] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" className='custom-navbar'>
        <Container>
          <Navbar.Brand href="#home">뉴진스</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#album">Album</Nav.Link>
            <Nav.Link href="#member">Member</Nav.Link>
            <Nav.Link href="#more">More</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style = {{height: 1}}/>
      <div className="main-bg"></div>
      <UncontrolledExample/>
    </div>
  );
}

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src='/1번 앨범.jpg' className='carousel-image'/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='/2번 앨범.jpg' className='carousel-image'/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='/3번앨범.jpg' className='carousel-image'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default App;
