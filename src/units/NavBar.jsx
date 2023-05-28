import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

export default function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                        <Nav.Link href="./AddBlog">AddBlog</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </div >
  )
}
