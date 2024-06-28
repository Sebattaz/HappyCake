import { Container} from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1>Pastel no encontrado :C</h1>
      <img src="./src/img/broken.png" alt="Broken" />
      <Nav>
          <Nav.Link as={Link} to='/' className="bg-success text-white">HOME</Nav.Link>
      </Nav>
    </Container>
  )
}

export default ErrorPage

