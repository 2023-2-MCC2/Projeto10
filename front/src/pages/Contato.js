import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'
import Contact from '../components/conteudo/Contact'
import TextContent from '../assets/TextContent'
import Apoio from '../components/carousel/CarouselApoio'
import Map from '../components/map/Map'
import styled from 'styled-components';
import Title from '../assets/Title';

const Section = styled.section`
  text-align: center;
  padding: 20px;
  font-size:25px;
`;
const Contato = () => {
  return (
    <div>
      <NavBar/>
          <Section>
          <Title text=" ENTRE EM Contato" />
          <TextContent/>
       </Section>
      
      <Contact/>
      <Map/>
      <Apoio/>
      <Footer/>
    </div>
  )
}

export default Contato
