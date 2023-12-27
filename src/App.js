import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Formulario from "./componentes/formulario/Formulario";
import ErrorMessageBox from "./componentes/erroMessage/ErrorMessageBox";
import { useState } from "react";
function App() {
  const [fato, setFato] = useState([]);
  const [error, setError] = useState(null);

  return (
    <Container fluid className="bg-dark text-light">
      <Row className="justify-content-center align-items-center vh-100 fs-5">
        <h1 className="text-center mt-3 fs-1">Fatos históricos</h1>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Formulario setError={setError} setFato={setFato} />
          <p>{fato.anoFato}</p>
          <p> {error && <ErrorMessageBox setError={error} />}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
