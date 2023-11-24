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

const InfoHis = () => {
    return (
      <Container>
        <ContentWrapper>
            <Title text="Nossa História" />
            <p>Em 1998, um grupo de pesquisadores e estudantes percebeu a necessidade de proteger as tartarugas marinhas que utilizavam as praias de Porto de Galinhas para desovar. Em 2003, foi fundada a ONG Ecoassociados, organização sem fins lucrativos, resultado da continuidade das atividades de conservação. A Instituição vem atuando na conservação de tartarugas marinhas em Pernambuco/Brasil através do monitoramento das áreas de desova e reabilitação de tartarugas marinhas, gestão e educação ambiental gerando conhecimento científico sobre os ecossistemas e a biodiversidade local. Atualmente a sede da ONG está localizada em Porto de Galinhas e funciona diariamente com atendimento ao público no Museu de Tartarugas Marinhas.</p>
        </ContentWrapper>
      </Container>
    );
 };

 export default InfoHis