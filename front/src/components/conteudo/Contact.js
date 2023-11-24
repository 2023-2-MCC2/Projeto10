 
import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const notifyError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

// const notifyInfo = (message) => {
//   toast.info(message, {
//     position: toast.POSITION.TOP_RIGHT,
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
// }
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Input = styled.input`
margin-top: 5px;
padding: 10px; 
border: 1px solid #ccc;
border-radius: 5px;
height: 50px; 
width: 380px; 
`;

const TextArea = styled.textarea`
  width: 380px;
  height:215px;
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 1rem 3.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  color: var(--black);
  background-color: var(--secondary-color);
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 20px;

  &:hover {
    background-color: var(--secondary-color-dark);
    color: var(--white);
  }

  @media (max-width: 768px) {
    
    padding:1rem 3rem;
    font-size: 1rem;
    margin : 20px 0;
    align-items: flex-start;
    
  }
`;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yhcbi9v', 'template_zyucp8p', form.current, 'mOlh4wrAah6RWvq05')
    .then((result) => {
      console.log(result.text);
      form.current.reset();
      notifySuccess('Email enviado com sucesso!');
    }, (error) => {
      console.log(error.text);
      notifyError('Erro ao enviar o email.');
    });
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Label>
        Nome:
        <Input type="text" name="user_name" required /> 
      </Label>
      <Label>
        Email:
        <Input type="email" name="user_email" required /> 
      </Label>
      <Label>
        Mensagem:
        <TextArea name="message" required /> 
      </Label>
      <Button type="submit" value="Send">Enviar</Button>
       <ToastContainer />
    </Form>
  );
}

export default Contact;

