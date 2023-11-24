import React from 'react';
import styled from 'styled-components';

const TrocarConteudo = styled.h1`
 color:green;
 text-shadow: 0px 1px 1px black;
 span.changetext {
    animation: changetext 10s linear infinite;

 }
 @keyframes changetext {
    0% {
      content: 'Eco';
    }
    33% {
      content: 'Doador';
    }
    66% {
      content: 'Voluntário';
    }
 }
`;

const opcoes = ['Eco', 'Doador', 'Voluntário'];

const TextContent = () => {
    const [opcaoAtual, setOpcaoAtual] = React.useState(0);

    React.useEffect(() => {
        const intervalo = setInterval(() => {
            setOpcaoAtual((opcaoAtual + 1) % opcoes.length);
        }, 1000);

        return () => clearInterval(intervalo);
    }, [opcaoAtual]);

    return (
        <TrocarConteudo>
            <span className="changetext">SEJA </span>
            <span className="changetext">{opcoes[opcaoAtual]}</span>
        </TrocarConteudo>
    );
};

export default TextContent;