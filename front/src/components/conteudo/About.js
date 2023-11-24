import React from 'react';
import styled from 'styled-components';
import EcoImage from '../../image/logo.webp';
import Title from '../../assets/Title';
import Button from '../button/Button';
import { textoAbout } from '../../assets/Assets';


const Container = styled.div`
display: flex;
align-items: center;
padding: 20px;
margin-bottom: 80px;
animation: slideIn 1s ease-in-out;
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (max-width: 768px) {
  flex-direction: column;
}
`;

const ImgAbout = styled.img`
  width: 25%;
  height: auto;
  margin: 0 10% ;
  @media (max-width: 768px) {
    width: 70%;
    margin: 10px;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;



const Summary = styled.p`
  margin-top: 10px;
  text-align: justify;
  margin-bottom: 1rem;
`;

const About = () => {
    return (
      <Container>
        <ImgAbout src={EcoImage} alt="Descrição da imagem" />
        <ContentWrapper>
            <Title text="Eco associados" />
            <Summary>{textoAbout}</Summary>
            <Button text="Nossa Historia" size="large" to={'/sobre-nos'} external={false} />
        </ContentWrapper>
      </Container>
    );
  };
  

  
  export default About;