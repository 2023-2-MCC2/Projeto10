import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  padding: ${({ size }) => (size === 'small' ? '0.5rem 1rem' : '1rem 2rem')};
  outline: none;
  border: none;
  font-size: 1.1rem;
  color: var(--black);
  background-color: var(--secondary-color);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 20px;

  &:hover {
    background-color: var(--secondary-color-dark);
    color: var(--white);
  }

  @media (max-width: 768px) {
    /* Styles for tablets */
    padding: ${({ size }) => (size === 'small' ? '0.3rem 0.9rem' : '0.9rem 1.5rem')};
    font-size: 1rem;
    margin : 20px 0;
    align-items: flex-start;
    
  }
`;

function Button({ text, size, to, external }) {
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        <StyledButton size={size} >
          {text}
        </StyledButton>
      </a>
    );
  }

  return (
    <Link to={to}>
      <StyledButton size={size} >
        {text}
      </StyledButton>
    </Link>
  );
}

export default Button;