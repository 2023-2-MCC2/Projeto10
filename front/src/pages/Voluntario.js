import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'
import CarouselVoluntario from '../components/carousel/CarouselVoluntario'
import InfoVoluntario from '../components/conteudo/InfoVoluntario'
import Inscricao from '../components/conteudo/Inscricao'
import Duvidas from '../components/conteudo/DuvidasFrequentes'

const Voluntario = () => {
  return (
    <div>
      <NavBar/>
      <CarouselVoluntario/>
      <InfoVoluntario/>
      <Inscricao/>
      <Duvidas/>
      <Footer/>
    </div>
  )
}

export default Voluntario
