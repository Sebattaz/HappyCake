import { Navbar, Nav, NavbarCollapse}  from "react-bootstrap"
import { Link} from "react-router-dom"
import { FcHome } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { GiCakeSlice } from "react-icons/gi";

const NavBar = () => {
  return (
    <Navbar bg="danger" expand='lg'>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <NavbarCollapse id="basic-navbar-nav">
            <Nav className="mx-5">
                <Nav.Link as={Link} to='/' className="text-light" ><FcHome /> Home</Nav.Link>
                <Nav.Link as={Link} to='/contacto' className="text-light"  ><FcCustomerSupport /> Contacto</Nav.Link>
            </Nav>
        </NavbarCollapse>
        <Navbar.Brand className="mx-5 ">
            <span className="text-light">Happy Cake</span>  <GiCakeSlice />
        </Navbar.Brand>
    </Navbar>
  )
}

export default NavBar
