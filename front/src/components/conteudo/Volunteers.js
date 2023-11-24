import React from 'react';
import styled from 'styled-components';
import Voluntario from '../../image/voluntario.png';
import Title from '../../assets/Title';
import Button from '../button/Button';
import { textoVoluntario } from '../../assets/Assets';


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
margin: 5% 0 ;
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
  border-radius: 45px 50px / 50px 15px;
  transition: transform 0.3s ease-in-out;  
  
  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: 10px;
    display: none;
  }
`;

const ContentWrapper = styled.div`
 width: 50%;
 text-align: justify;
 margin:50px;
 @media (max-width: 768px) {
    width: 100%;
 }
`;

const Summary = styled.p`
 margin-top: 10px;
 margin-bottom: 1rem;
`;

const Volunteers = () => {
    return (
      <Container>
        <ContentWrapper>
            <Title text="Seja Voluntário" />
            <Summary>{textoVoluntario}</Summary>
            <Button text="Seja um Eco" size="large" to={'/voluntario'} external={false} />
        </ContentWrapper>
        <ImgAbout src={Voluntario} alt="Descrição da imagem" />
      </Container>
    );
 };
  

  
 export default Volunteers;