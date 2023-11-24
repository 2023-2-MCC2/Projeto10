import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
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

const Unit = styled.span`
 color: var(--black);
 font-size: 14px;
 margin-top: 20px;
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
          <Plus>+</Plus>
          <CountUp start={0} end={1200} duration={2} separator="," />
          <Unit>mil</Unit>
        </CountWrapper>
        <Description>voluntarios</Description>
      </Stat>
      <Stat>
        <CountWrapper>
          <Plus>+</Plus>
          <CountUp start={0} end={1200} duration={2} separator="," />
          <Unit>mil</Unit>
        </CountWrapper>
        <Description>Ocorrencias registradas</Description>
      </Stat>
      <Stat>
        <CountWrapper>
          <Plus>+</Plus>
          <CountUp start={0} end={1200} duration={2} separator="," />
          <Unit>mil</Unit>
        </CountWrapper>
        <Description>tartarugas resgatadas</Description>
      </Stat>
    </Container>
 );
};

export default InfoSection;