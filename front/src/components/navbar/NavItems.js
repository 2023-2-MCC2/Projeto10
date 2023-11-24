import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    align-items: flex-start;
  }
`;

const LinkStyle = styled.li`
  a {
    position: relative;
    padding-bottom: 0.75rem;
    color: var(--white);
    text-align: center; /* Centraliza o texto */
  }

  a::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    left: 0;
    bottom: 0;
    background-color: var(--secondary-color);
    transition: 0.3s;
  }

  a:hover::after {
    width: 50%;
  }

  @media (max-width: 768px) {
    &:first-child {
      margin-top: 1rem; 
    }
  }
`;

function Navegacao() {
  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'Sobre nós', url: '/sobre-nos' },
    { name: 'Seja Voluntário', url: '/voluntario' },
    { name: 'Contatos', url: '/contato' },
  ];

  return (
    <NavLinks>
      {navItems.map((item, index) => (
        <LinkStyle key={index} className="link">
          <Link to={item.url}>{item.name}</Link>
        </LinkStyle>
      ))}
    </NavLinks>
  );
}

export default Navegacao;