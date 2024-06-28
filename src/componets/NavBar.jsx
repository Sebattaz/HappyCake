import { Navbar, Nav, NavbarCollapse}  from "react-bootstrap"
import { Link} from "react-router-dom"


const NavBar = () => {
  return (
    <Navbar bg="danger" expand='lg'>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <NavbarCollapse id="basic-navbar-nav">
            <Nav className="mx-5">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/contacto' >Contacto</Nav.Link>
            </Nav>
        </NavbarCollapse>
        <Navbar.Brand className="mx-5">
            Happy Cake
        </Navbar.Brand>
    </Navbar>
  )
}

export default NavBar
