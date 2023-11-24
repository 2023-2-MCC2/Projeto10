import React from 'react';
import styled from 'styled-components';
import Title from '../../assets/Title';


const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40%
  @media (min-width: 768px) {
    margin: 0;
  }
`;

const MapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const MapInfo = styled.div`
  margin: 45px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
  }
`;

const Map = () => {
  return (
    <MapContainer>
        <MapInfo>
        <Title text="Venha conhecer a eco" />
          <p>Endereço: Rua Caraúna - Porto de Galinhas, Ipojuca - PE, 55590-000</p>
          <p>Email: exemplo@exemplo.com</p>
          <p>Telefone: (00) 1234-5678</p>
        </MapInfo>
      <MapContent>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9249562467685!2d-35.00790292903642!3d-8.506667567391192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aa9229b8f6eea1%3A0x612f76a809624d0a!2sRua%20Cara%C3%BAna%20-%20Porto%20de%20Galinhas%2C%20Ipojuca%20-%20PE%2C%2055590-000!5e0!3m2!1spt-BR!2sbr!4v1700797927857!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </MapContent>
    </MapContainer>
  );
}

export default Map;