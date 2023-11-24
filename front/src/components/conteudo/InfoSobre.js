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

const InfoSobre = () => {
    return (
      <Container>
        <ContentWrapper>
            <Title text="ECO ASSOCIADOS" />
            <p>A Ecoassociados é uma organização sem fins lucrativos que desde 1998 realiza ações fundamentais para a conservação de tartarugas marinhas.</p>
        </ContentWrapper>
      </Container>
    );
 };

 export default InfoSobre