import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/footer'
import CarouselQS from '../components/carousel/CarouselQS'
import InfoSection from '../components/info/infoMVV'
import InfoSobre from '../components/conteudo/InfoSobre'
import InfoHis from '../components/conteudo/InfoHis'
const SobreNos = () => {
  return (
    <div>
      <NavBar/>
      <CarouselQS/>
      <InfoSobre/>
      <InfoSection/>
      <InfoHis/>
      <Footer/>
    </div>
  )
}

export default SobreNos
