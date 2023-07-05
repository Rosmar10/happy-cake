import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";



export default function Navigation() {
    return (
        <Navbar className="bg-red" variant="dark" expand="lg">
            <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="float-left">

                        <Link className="text-white ms-3 text-decoration-none"
                            to='/'> 🏠 Home
                        </Link>
                        <Link className="text-white ms-3 text-decoration-none"
                            to='/Contacto'> 📔 Contacto
                        </Link>

                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand className="float-right" href="/Home">Happy Cake 🍰</Navbar.Brand>

            </Container>
        </Navbar>
    )
}

