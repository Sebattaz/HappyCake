import { Container } from "react-bootstrap"

const Home = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1>Bienvenido a Happy Cake</h1>
      <p>El lugar de los pasteles felices</p>
      <img src="./src/img/cake.png" alt="Happy Cake" />
    </Container>
  )
}

export default Home
