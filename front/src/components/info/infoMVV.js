import React from 'react';
import styled from 'styled-components';
import bg from '../../image/bg01.svg'

const Container = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 height: 250px;
 background-image: url(${bg});
 background-repeat: no-repeat;
 background-size: cover;
 padding: 0 20px;
 margin: 0 auto;

 @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 40px 0;
 }
}
`;

const Stat = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

const CountWrapper = styled.div`
 display: flex;
 align-items: center;
 font-size: 3rem;
 font-weight: bold;
 text-shadow: 2px 2px 4px var(--white);
`;

const Plus = styled.span`
 font-size: 2.5rem;
 margin-right:10px;
`;

const Description = styled.p`
 font-size: 20px;
 color: var(--black);
`;
const InfoSection = () => {
 return (
    <Container>
      <Stat>
        <CountWrapper>
          <Plus>Missão</Plus>
        </CountWrapper>
        <Description>Conservar e proteger as tartarugas marinhas que utilizam as praias de Porto de Galinhas para desovar, promovendo a preservação dos ecossistemas marinhos em Pernambuco/Brasil.</Description>
      </Stat>
      <Stat>
        <CountWrapper>
          <Plus>Visão</Plus>
        </CountWrapper>
        <Description>Buscamos ser líderes na promoção da conservação das tartarugas marinhas, destacando-nos pela excelência em pesquisa, monitoramento e educação ambiental.</Description>
      </Stat>
      <Stat>
        <CountWrapper>
          <Plus>Valores</Plus>
        </CountWrapper>
        <Description>Comprometimento e Integridade: Dedicamo-nos com integridade à proteção das tartarugas marinhas e à preservação dos ecossistemas, buscando um impacto positivo duradouro.</Description>
      </Stat>
    </Container>
 );
};

export default InfoSection;