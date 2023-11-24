import React from 'react';
import styled from 'styled-components';


const TitleContainer = styled.div`
display: flex;
align-items: center
`;

const Hashtag = styled.span`
  color: yellow;
  font-size: 4rem;
`;

const TitleText = styled.h1`
  margin-left: 5px;
  text-transform: uppercase;
`;

const Title = ({ text }) => {
  return (
    <TitleContainer>
      <Hashtag>#</Hashtag>
      <TitleText>{text}</TitleText>
    </TitleContainer>
  );
}


export default Title;