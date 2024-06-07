import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import './Contato.css';

function Contato() { // Renomeei a função para "Contato"
  const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro'];

  const handleCadastro = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para registrar o usuário
  };

  return (
    <div className="ctt">
      <h2 className="mb-4">Fale Conosco</h2>

      <Form onSubmit={handleCadastro}>
        <Form.Group controlId="formBasicNome" className="Nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome:" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email:" />
        </Form.Group>

        <Form.Group controlId="formBasicTelefone" className="Telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" placeholder="Digite seu telefone:" />
        </Form.Group>

        <Row>
          <Col>
            <Form.Group controlId="formBasicCidade" className="Cidade">
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" placeholder="Digite sua cidade:" />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="formBasicEstado" className="Estado">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select">
                <option>Selecione o Estado</option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formBasicMensagem" className="Mensagem">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Digite sua mensagem:" />
        </Form.Group>

        <Button variant="primary" type="submit" className="ctt-custom">Enviar</Button>
      </Form>
    </div>
  );
}

export default Contato; 