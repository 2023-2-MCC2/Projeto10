import React from 'react';
import styled from 'styled-components';


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
 width: 100%;
 text-align: justify;
 margin:10px;
 @media (max-width: 768px) {
    width: 100%;
 }
`;

const Pergunta1 = () => {
    return (
      <Container>
        <ContentWrapper>
            <h3>O que preciso para ser um voluntário?</h3>
            <p>Para o preenchimento do formulário nós solicitamos os seuintes documentos:{<br/>}Currículo (Vitae ou Lattes){<br/>}Carta de apresentação (Modelo livre){<br/>}Carta de recomendação (Modelo disponível para download no nosso Instagram){<br/>}Comprovante de matrícula ou certificado de conclusão de curso
            </p>
        </ContentWrapper>
      </Container>
    );
 };

 const Pergunta2 = () => {
    return (
      <Container>
        <ContentWrapper>
            <h3>Qual o periodo do voluntariado?</h3>
            <p>Existem duas vagas de periodos diferentes:{<br/>}VAGA MENSAL: Permanência no Projeto pelo período de UM MÊS com uma folga na semana.{<br/>}FINAIS DE SEMANA: Permanência no Projeto durante os finais de semana (escala quinzenal) com duração mínima de TRÊS MESES e máxima de SEIS.</p>
        </ContentWrapper>
      </Container>
    );
 };

 const Pergunta3 = () => {
    return (
      <Container>
        <ContentWrapper>
            <h3>Quem custeia as despesas do voluntariado?</h3>
            <p>A Ecoassociados oferece alojamento para os voluntários, no entanto as despesas com deslocamento e alimentação serão de responsabilidade do voluntário.</p>
        </ContentWrapper>
      </Container>
    );
 };

 const Pergunta4 = () => {
  return (
    <Container>
      <ContentWrapper>
          <h3>Preciso ser de uma região especifica para me voluntariar?</h3>
          <p>Sim, possuimos vagas para candidatos que residem em cidades próximas ao município do Ipojuca, em Pernambuco</p>
      </ContentWrapper>
    </Container>
  );
};

 const Pergunta5 = () => {
    return (
      <Container>
        <ContentWrapper>
            <h3>Outras formas de ajudar</h3>
            <p>Você também pode ajudar fazendo uma doação para nós e nos seguindo nas redes sociais</p>
        </ContentWrapper>
      </Container>
    );
 };

export {
    Pergunta1,
    Pergunta2,
    Pergunta3,
    Pergunta4,
    Pergunta5
}