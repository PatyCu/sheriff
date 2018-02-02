import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    color: LightSlateGray;
`;

const Header = () => {
    return (
       <Title>Hello World</Title>   
    );
};

export default Header;