import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../image/img1.jpg';
import img2 from '../../image/img2.jpg';
import img3 from '../../image/img3.jpg';
import styled from 'styled-components';
import { doacaoLink } from "../../assets/Assets";
import Button from '../button/Button';


const ImageCarousel = styled.img`
  height: 60vh;
  object-fit: cover;
  filter: brightness(60%);
`;

const CarouselWrapper = styled.div`
  position: relative;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  text-align: center;

`;
const TextLine = styled.div`
  white-space: nowrap; 
  font-size: 3em;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  text-shadow: 3px 3px var(--primary-color-extra-light);
  
`;

function CarouselComponent() {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) {
    return null; 
  }

  return (
    <div>
      <CarouselWrapper>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={false}
          transitionTime={500}
          swipeable={true}
        >
          <div>
            <ImageCarousel src={img1} alt="Slide 1" />
          </div>
          <div>
            <ImageCarousel src={img2} alt="Slide 2" />
          </div>
          <div>
            <ImageCarousel src={img3} alt="Slide 3" />
          </div>
        </Carousel>
        <TextOverlay>
          <TextLine>Encontrou uma</TextLine> 
          <TextLine>tartaruga</TextLine> 
          <TextLine>encalhada?</TextLine> 
          <Button text="Entre em Contato" size="large" to={doacaoLink} external={true} />
        </TextOverlay>
        
      </CarouselWrapper>
    </div>
  );
}

export default CarouselComponent;