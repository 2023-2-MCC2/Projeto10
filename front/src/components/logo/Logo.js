import React from 'react';
import logo from '../../image/logo.webp';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoImg = styled.img `
width: 73px;
margin-left: 20px;
`;

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg src={logo} alt="Logo" />
    </Link>
  )
};

export default Logo;