import React from 'react'
import NavBar from '../components/navbar/NavBar'
import InfoSection from '../components/info/Info'
import About from '../components/conteudo/About'
import Volunteers from '../components/conteudo/Volunteers'
import CarouselComponent from '../components/carousel/Carousel'
import CarouselCard from '../components/carousel/CarouselCard'
import Apoio from '../components/carousel/CarouselApoio'
import Footer from '../components/footer/footer'


const Home = () => {
  return (
    <div>
      <NavBar/>
      <CarouselComponent/>
      <InfoSection/>
      <About/>
      <CarouselCard/>
      <Volunteers/>
      <Apoio/>
      <Footer/>
    </div>
  )
}

export default Home
