import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useAppContext } from "../../servicos/Context";
function Formulario() {
  const { setFato, setError, setEspera, espera } = useAppContext();
  const [anoFato, setAnoFato] = useState("");
  const [limpaInput, setLimpaInput] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleErrors = (errorMessage) => {
    setFato("");
    setEspera(false);
    setError(errorMessage);
    setAnoFato("");
  };
  const handlePositive = (dados) => {
    setFato(dados);
    setEspera(false);
    setError("");
    setAnoFato("");
  };
  const buscarFato = async (e) => {
    e.preventDefault();
    setLimpaInput("");
    setEspera(true);

    try {
      const response = await fetch(
        `https://fatoshistoricos.onrender.com/?anoFato=${anoFato}`
      );

      if (response.ok) {
        const dados = await response.json();
        handlePositive(dados);
      } else {
        handleErrors("Ocorreu um erro ao buscar os dados.");
      }
    } catch (error) {
      handleErrors(
        "Ocorreu um erro ao buscar os dados. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Form.Group>
        <Form.Label>Digite o ano entre 1920 e 2020:</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Digite aqui"
          value={limpaInput}
          onChange={(evento) => {
            setAnoFato(evento.currentTarget.value);
            setLimpaInput(evento.currentTarget.value);
          }}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          Falhou! Digite apenas números entre 1920 e 2020
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        type="submit"
        className="w-50 mt-3 mb-5"
        variant="outline-secondary"
        onClick={buscarFato}
      >
        {espera ? "Carregando..." : "Enviar"}
      </Button>
    </Form>
  );
}
export default Formulario;
