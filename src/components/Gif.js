import React from 'react';
import styled from 'styled-components';
import Image from '../assets/gif.gif';
import theme from '../data/theme';

const Gif = () => {
    return (  
        <Container>
            <ImgContainer/>
        </Container>
    );
}
 
const Container = styled.div`
    background: ${theme.backgroundColor};
    padding: 50px 0;
`;

const ImgContainer = styled.div`
    background-color: #fff;
    background-image: url(${Image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 480px;
    width: 100vw;
    height: 500px;
    
    @media (max-width: 767px) {
        background-size: 90vw;
    }
`;

export default Gif;