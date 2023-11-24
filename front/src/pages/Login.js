import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/logo/Logo';
import axios from 'axios';
import Button from "../components/button/Button";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyleButton = styled.button`
  padding: 10px;
  flex: 1;
  margin-right: 5px;
  background-color: var(--primary-color-extra-light);
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const values = { email, password };
  
    if (!email || !password) {
      setError('Por favor, informe o email e a senha');
      return;
    }
  
    try {
      const res = await axios.post('http://localhost:3000/login', values);
      console.log(res);
      setEmail('');
      setPassword('');
      navigate('/');
    } catch (err) {
      console.error('Erro ao entrar:', err);
      if (err.response) {
        if (err.response.status === 401) {
          setError('Credenciais inválidas. Por favor, verifique o email e a senha.');
        } else if (err.response.status === 404) {
          setError('Email não cadastrado. Crie uma conta para continuar.');
        } else {
          setError('Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.');
        }
      } else {
        setError('Erro ao entrar. Por favor, verifique sua conexão de internet.');
      }
    }
  };
  
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <Input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
        {error && <span style={{ color: 'red' }}>{error}</span>} {/* Exibe a mensagem de erro */}
        <ButtonContainer>
          <StyleButton type="submit">Entrar</StyleButton>
        </ButtonContainer>
        <p>Não tem cadastro? Crie agora</p>
        <Button text="Cadastrar" size="large" to="/cadastrar" external={false} />
      </Form>
    </Container>
  );
};

export default LoginPage;