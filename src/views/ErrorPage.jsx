import { Container} from "react-bootstrap"

const ErrorPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1>Pastel no encontrado :C</h1>
      <img src="./src/img/broken.png" alt="Broken" />
    </Container>
  )
}

export default ErrorPage

