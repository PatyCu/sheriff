import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    color: LightSlateGray;
`;

const HomePage = () => {
    return (
        <div className="container">
            <Title>Hello World!</Title>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <p>
            Donec mattis sodales enim non lobortis. Donec lacinia dolor in sodales pretium. 
            Pellentesque imperdiet ipsum sed vestibulum posuere. Nulla sagittis rutrum lectus, vitae volutpat justo. Proin dignissim ultrices consectetur. 
            Mauris lorem sapien, hendrerit vitae elit vel, accumsan faucibus mauris. Sed non lorem vel metus dignissim convallis consequat ac tellus. 
            Maecenas ullamcorper venenatis libero, vel egestas turpis gravida id. Nullam nec consectetur nibh. Aenean eleifend quam vel consectetur vestibulum. 
            Suspendisse urna sem, pretium at imperdiet ut, finibus vitae lectus. Aenean vel nisi viverra, egestas massa ut, interdum ante. 
            Quisque quis aliquet magna, ac accumsan ligula. Cras aliquet nisl nisl, at gravida velit pellentesque ac. 
            Donec suscipit auctor nibh, iaculis ultricies elit consectetur sed.
            </p> 
        </div>
    );
};

export default HomePage;