import '../navbar/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

const NavBar = (()=>{


    const menu = [

        {title : 'Sobre Mi', link:'#sobremi'},
        {title : 'Experiencia', link:"#experiencia"},
        {title : 'Proyectos', link:"#proyectos"},
        {title : 'Contactame', link:"#contacto"},
        {title : 'Resume / CV', link:"#resume"},
      
    ];
    

    return (
       <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MM</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                    
                         {menu.map((item, link, index) => {
                             return (
                                 <div key={index}>
                                     <Nav.Link href={item.link}>
                                        {item.title}
                                     </Nav.Link>
                                 </div>
                             )
                         })};
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </>
    )
})

export default NavBar

