import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/logo/Logo';
import axios from 'axios';
import Button from "../components/button/Button";
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line
import zxcvbn from 'zxcvbn';


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

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [buttonText, setButtonText] = useState('Cadastrar');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const passwordStrength = zxcvbn(newPassword);
    if (passwordStrength.score < 3) {
      setError('A senha é fraca. Crie uma senha mais forte.');
    } else {
      setError(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText('Cadastrando...');

    if (!username && !email && !password) {
      setError('Por favor, preencha todos os campos');
      setButtonText('Cadastrar');
      return;
    }

    const values = { username, email, password };
    axios.post('http://localhost:3000/cadastrar', values)
      .then(res => {
        console.log(res);
        setUsername('');
        setEmail('');
        setPassword('');
        setSuccessMessage('Usuário registrado com sucesso!');
        navigate('/login');
      })
      .catch(err => {
        console.error('Erro ao cadastrar:', err);
        setError(err.response.data.error);
      })
      .finally(() => {
        setButtonText('Cadastrar');
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Input type="text" placeholder="Nome de usuário" value={username} onChange={handleUsernameChange} />
        <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <Input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} error={error} />
        {error && <span style={{ color: 'red' }}>{error}</span>}
        {successMessage && <span style={{ color: 'green' }}>{successMessage}</span>}
        <ButtonContainer>
          <StyleButton type="submit">{buttonText}</StyleButton>
        <Button text="Login" size="large" to="/login" external={false} />
        </ButtonContainer>
        <p> já é cadastrado? faça seu login</p>
      </Form>
    </Container>
  );
};

export default SignupPage;
