import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import card1 from '../../image/slide1.jpg';
import card2 from '../../image/slide2.jpg';
import card3 from '../../image/slide3.jpg';
import card4 from '../../image/quemsomos.jpg';
import card5 from '../../image/quemsomos2.jpg';
import card6 from '../../image/quemsomos3.jpg';
import card7 from '../../image/voluntarios1.png';
import card8 from '../../image/voluntarios2.png';
import card9 from '../../image/voluntarios3.png';
import Title from '../../assets/Title';
import Button from '../button/Button';

const Card = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 300px;
 height: 350px;
 border: 1px solid #ccc;
 border-radius: 8px;
 margin:10px;

 @media (max-width: 768px) {
  width: 100%;
  margin-left:0;
}
`;

const TituloStyle = styled.p`
 font-size: 24px;
 font-weight: bold;
 margin-bottom: 8px;
`;

const Description = styled.p`
 font-size: 16px;
`;
const ImgCard = styled.img`
width: 300px;
height: 200px;

@media (max-width: 768px) {
   width: 100%;
   height: auto;
 }
`;
const CarouselCard = () => (
 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
 <Container>
    <Title text="Eco campanhas" />
    <Row>
      <Col sm={12} md={6} lg={4}>
        <Card>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop intervalTime={3000}>
            <ImgCard src={card1} alt="card 1" />
            <ImgCard src={card2} alt="card 2" />
            <ImgCard src={card3} alt="card 3" />
          </Carousel>
          <TituloStyle>Museu Eco</TituloStyle>
          <Description>O Museu das Tartarugas Marinhas, inaugurado em 2014, está localizado na praia de Porto de Galinhas, no município do Ipojuca, Pernambuco</Description>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <Card>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop intervalTime={3000}>
            <ImgCard src={card4} alt="card 1" />
            <ImgCard src={card5} alt="card 2" />
            <ImgCard src={card6} alt="card 3" />
          </Carousel>
          <TituloStyle>Mar Limpo</TituloStyle>
          <Description> A iniciativa Mar Limpo visa ajudar as pessoas a entenderem as causas da crise de resíduos oceânicos e capacitá-las a agir.2</Description>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <Card>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop intervalTime={3000}>
            <ImgCard src={card7} alt="card 1" />
            <ImgCard src={card8} alt="card 2" />
            <ImgCard src={card9} alt="card 3" />
          </Carousel>
          <TituloStyle>Adote um ninho</TituloStyle>
          <Description>A temporada reprodutiva de Tartarugas Marinhas ocorre de outubro a maio.</Description>
        </Card>
      </Col>
    </Row>
 </Container>
 <Button text="Saiba mais" size="large" to={'/contatos'} external={false} />
 </div>
);

export default CarouselCard;