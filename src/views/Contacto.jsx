import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Contacto() {
    return (
        <Container className="pt-5">

            <h1 className="mb-4 text-center">Cuéntanos, ¿En qué te podemos ayudar?</h1>

            <Form className='text-center'>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <button className="boton">Enviar</button>
            </Form>

        </Container>
    );
}

export default Contacto;