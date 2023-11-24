import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import voluntarios1 from '../../image/voluntarios1.png'
import voluntarios2 from '../../image/voluntarios2.png'
import voluntarios3 from '../../image/voluntarios3.png'
import styled from 'styled-components';


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

function CarouselVoluntario() {
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
            <ImageCarousel src={voluntarios1} alt="Slide 1" />
          </div>
          <div>
            <ImageCarousel src={voluntarios2} alt="Slide 2" />
          </div>
          <div>
            <ImageCarousel src={voluntarios3} alt="Slide 3" />
          </div>
        </Carousel>
        <TextOverlay>
          <TextLine>Quer ajudar a limpar o mar?</TextLine>
          <TextLine>Seja um voluntário</TextLine> 
        </TextOverlay>
        
      </CarouselWrapper>
    </div>
  );
}

export default CarouselVoluntario;