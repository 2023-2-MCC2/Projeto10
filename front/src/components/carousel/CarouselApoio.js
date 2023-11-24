import React from 'react';
import styled from 'styled-components';
import apoio1 from '../../image/apoio1.jpg';
import apoio2 from '../../image/apoio2.jpg';
import apoio3 from '../../image/apoio3.png';
import apoio4 from '../../image/apoio4.jpg';
import apoio5 from '../../image/apoio5.jpg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin:auto;
  margin-bottom: 50px;

`;

const Image = styled.img`
  width: 100px;
  max-height: 200px;
  margin: 1em;

  @media (max-width: 768px) {
    width: 45%;
  }
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
`;

const Apoio = () => {
  const patrocinadores = [
    {nome: 'Patrocinador 1', url: apoio1},
    {nome: 'Patrocinador 2', url: apoio2},
    {nome: 'Patrocinador 3', url: apoio5},
    {nome: 'Patrocinador 4', url: apoio4},
    {nome: 'Patrocinador 5', url: apoio3}
  ];

  return (
    <Container>
      <Title>Apoiadores</Title>
      {patrocinadores.map((patrocinador, index) => (
        <Image key={index} src={patrocinador.url} alt={patrocinador.nome} />
      ))}
    </Container>
  );
};

export default Apoio;