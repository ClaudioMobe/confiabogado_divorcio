import React from 'react';
import styled from 'styled-components';
import theme from '../data/theme';
import FadeRightButton from '../elements/FadeRightButton';
import Title from '../elements/Title';
import Paso1 from '../assets/paso1.png';
import Paso2 from '../assets/paso2.png';
import Paso3 from '../assets/paso3.png';
import Paso4 from '../assets/paso4.png';

const Pasos = () => {
  const pasosArray = [
    {
        url: Paso1,
        text: 'Toma la decisión de divorciarte'
    },{
        url: Paso2,
        text: 'Hacemos tu separación a la medida'
    },{
        url: Paso3,
        text: 'Ten asesoría legal gratis'
    },{
        url: Paso4,
        text: 'Disfruta tu nueva vida'
    }
  ];

  return ( 
    <Container>
        <Title>4 pasos para separarte y protegerte</Title>
        <Subtitle>¡De la manera más fácil!</Subtitle>
        <PasosContainer>
            {pasosArray.map((paso, index)=>{
                return (
                    <Paso key={index}>
                        <ImgPaso url={paso.url} />
                        <Li>{paso.text}</Li>
                    </Paso>
                )
            })}
        </PasosContainer>
        <FadeRightButton>EMPIEZA CON TU DIVORCIO</FadeRightButton>
    </Container>
   );
}
 
const Container = styled.div`
    width: 100vw;
    background: ${theme.backgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 100px;
    font-family: ${theme.primaryFont};
    
    @media (max-width: 767px) {
        padding: 50px;
    }
`;

const Subtitle = styled.h3`
    color: ${theme.primaryColor};
    font-size: ${theme.subtitleFontSize};
    margin: 20px 0 10px 0;
    font-weight: 700;

    @media (max-width: 767px) {
        font-size: 18px;
        margin: 10px 0 5px 0;
    }
`;

const PasosContainer = styled.ol`
    display: flex;
    justify-content: center;
    width: 65%;
    color: #3E3E3E;
    margin-bottom: 45px;
    list-style-position: inside;

    @media (max-width: 1200px) {
        width: 100%;
    }
    
    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        width: 80%;
    }
`;


const Paso = styled.div`
    display: flex;
    flex-direction: column;
    width: 270px;
    min-width: 170px;
    text-align: center;
    padding: 10px;
    
    @media (max-width: 767px) {
        width: 100%;
    }
`;

const ImgPaso = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: auto 85%;
    background-position: center;
    height: 150px;
    width: 100%;
    
    @media (max-width: 767px) {
        height: 300px;
    }

`;

const Li = styled.li`
    font-size: ${theme.textFontSize};
    font-weight: 700;
    padding: 10px 5px;
`;

export default Pasos;