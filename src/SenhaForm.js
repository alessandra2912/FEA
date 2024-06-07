import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './senha.css';

const SenhaForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessage('As senhas não coincidem.');
      return;
    }

    // Lógica de redefinição de senha aqui (ex: chamar API)
    // Se a redefinição de senha for bem-sucedida:
    setMessage('Senha alterada com sucesso.');
    setTimeout(() => navigate('/Login'), 2000);  // Redireciona para a página de login após 2 segundos
  };

  return (
    <div className="senha-form">
      <h2>Recuperação de conta</h2>
      <Form onSubmit={handleSubmit}>
        <div className='input-box'>
          <Form.Group controlId="formNewPassword">
            <Form.Label>Nova Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Defina a sua nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </Form.Group>
        </div>

        <div className='input-box'>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirme a Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirme a sua nova senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
        </div>

        {message && <p>{message}</p>}

        <Button variant="primary" type="submit" block className="custom-button">Alterar Senha</Button>
      </Form>
    </div>
  );
};

export default SenhaForm;

