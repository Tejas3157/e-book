import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
     <Navbar expand="lg" style={{ background: '#1f1f38' }} variant="dark">
            <Container>
                {/* Left: Logo */}
                <Navbar.Brand href="/" style={{ fontWeight: 'bold', letterSpacing: '2px', marginRight: '100px' }}>
                    E-Book
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    {/* Center: Nav Links */}
                    <Nav className=" mr-20">
                        <Nav.Link href="/" style={{ color: '#f8f9fa' }}>Home</Nav.Link>
                        <Nav.Link href="/features" style={{ color: '#f8f9fa' }}>Features</Nav.Link>
                        <Nav.Link href="/pricing" style={{ color: '#f8f9fa' }}>Contact</Nav.Link>

                    </Nav>
                    {/* Right: Login & Sign Up */}
                    <div className="d-flex align-items-center ms-auto">
                        <Nav.Link href="/login" style={{ color: '#f8f9fa' }}>Login</Nav.Link>``
                        <Nav.Link
                            href="/signup"
                            style={{
                                color: '#f8f9fa',
                                background: '#ff6e7f',
                                borderRadius: '4px',
                                marginLeft: '8px',
                                padding: '6px 16px'
                            }}
                        >
                            Sign Up
                        </Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header