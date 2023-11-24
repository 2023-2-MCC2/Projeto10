import React from 'react';
import styled from 'styled-components';
import Title from '../../assets/Title';


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

const ContentWrapper = styled.div`
 width: 50%;
 text-align: justify;
 margin:50px;
 @media (max-width: 768px) {
    width: 100%;
 }
`;

const InfoVoluntario = () => {
    return (
      <Container>
        <ContentWrapper>
            <Title text="Como ser um voluntário" />
            <p>Caso o edital para novos voluntários esteja aberto basta clicar no botão abaixo "Seja um Eco" e você sera direcionado para o preenchimento do formulário de voluntário. Lembre-se de sempre ficar de olho em nossas redes sociais para saber quando vamos abrir novos editais de voluntários</p>
        </ContentWrapper>
      </Container>
    );
 };

 export default InfoVoluntario