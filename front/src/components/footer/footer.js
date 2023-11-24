import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp,FaDonate  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {SOCIAIS } from '../../assets/Assets'
import bg2 from '../../image/bg03.svg'



const FooterSection = styled.section`
background-image: url(${bg2});
background-repeat: no-repeat;
background-size: cover;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const BoxTitle = styled.h3`
    font-size: 1.8rem;
    margin-top: 55px;
    
`;
const LinkFooter = styled.a`
    display: block;
    font-size: 1rem;
    padding: 20px 0;
    text-decoration: none;
    transition: padding-right 0.3s ease-in-out;
    color: var(--black);

    &:hover {
      padding-right: 2rem;
      color:yellow;
    }
      @media (max-width: 768px) {
      padding: 8px 0;
  }

  @media (max-width: 480px) {
      padding: 6px 0;
      font-size:0.9rem;
  }
`;
const StyledIcon = styled.span`
  color: var(--white);
`;

const Box = styled.div`
  text-align: center;
  margin-top:20px;

  
`;

const Credit = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-top: 1px solid #000;
  font-size: 1rem;
  color: var(--black);
`;

const StyledLink = styled(Link)`
    display: block;
    font-size: 1rem;
    padding: 11px 0;
    text-decoration: none;
    transition: padding-right 0.3s ease-in-out;
    color: var(--black);

    &:hover {
      padding-right: 2rem;
      color:yellow;
    }
      @media (max-width: 768px) {
      padding: 8px 0;
      font-size: 0.9rem;
  }

  @media (max-width: 480px) {
      padding: 6px 0;
      font-size: 0.8rem;
  }
`;
const MenuBox = () => (
  <Box>
    <BoxTitle>Menu</BoxTitle>
    <StyledLink to="/">Home </StyledLink>
    <StyledLink to="/sobre-nos">Sobre Nos</StyledLink>
    <StyledLink to="/voluntario">Voluntário</StyledLink>
    <StyledLink to="/Contato">Contatos</StyledLink>
  </Box>
);

const ContatoBox = () => (
  <Box>
    <BoxTitle>Contato</BoxTitle>
    <LinkFooter href="#"><StyledIcon><FaPhone /></StyledIcon> 11-5222-3333 </LinkFooter>
    <LinkFooter href="#"><StyledIcon><FaEnvelope /></StyledIcon> ecoassociados@gmail.com </LinkFooter>
    <LinkFooter href="#"><StyledIcon><FaMapMarkerAlt /></StyledIcon> Porto de Galinhas, Brasil </LinkFooter>
    <LinkFooter href="#"><StyledIcon><FaDonate  /></StyledIcon> Faça sua Doação </LinkFooter>
  </Box>
);

const RedesSociaisBox = () => (
  <Box>
    <BoxTitle>Redes sociais</BoxTitle>
    <LinkFooter href={SOCIAIS.instagram}><StyledIcon><FaInstagram /></StyledIcon> Instagram </LinkFooter>
    <LinkFooter href={SOCIAIS.facebook}><StyledIcon><FaFacebook /></StyledIcon> Facebook </LinkFooter>
    <LinkFooter href={SOCIAIS.youtube}><StyledIcon><FaYoutube /></StyledIcon> YouTube </LinkFooter>
    <LinkFooter href={SOCIAIS.whatsapp}><StyledIcon><FaWhatsapp /></StyledIcon> WhatsApp </LinkFooter>
  </Box>
);

const Footer = () => (
  <FooterSection>
    <BoxContainer>
      <MenuBox />
      <ContatoBox />
      <RedesSociaisBox />
    </BoxContainer>
    <Credit> ONG Eco Associados | Todos os direitos reservados 2023 </Credit>
  </FooterSection>
);

export default Footer;
