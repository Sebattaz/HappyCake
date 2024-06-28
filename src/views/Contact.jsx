import { Container } from "react-bootstrap"

const Contact = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
            <h2>Cuentanos, ¿en que podemos ayudar?</h2>
            <p>Correo:</p>
            <input type='email' placeholder="example@example.com" />
            <br />
            <p>Descripcion:</p>
            <textarea name="" id=""></textarea>
            <br />
            <button type="button" className='btn btn-danger '>Enviar</button>
    </Container>
  )
}

export default Contact
   