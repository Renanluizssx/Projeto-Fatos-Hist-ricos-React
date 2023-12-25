import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAppContext } from "./servicos/context";
import Formulario from "./componentes/formulario/Formulario";
import ErrorMessageBox from "./componentes/erroMessage/ErrorMessageBox";
function App() {
  const { fato, error } = useAppContext();

  return (
    <Container fluid className="bg-dark text-light">
      <Row className="justify-content-center align-items-center vh-100 fs-5">
        <h1 className="text-center mt-3 fs-1">Fatos históricos</h1>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Formulario />
          <p>{fato.anoFato}</p>
          <p> {error && <ErrorMessageBox />}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
