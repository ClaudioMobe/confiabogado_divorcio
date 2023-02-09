import React from "react";
import styled from "styled-components";
import theme from "../data/theme";
import Title from "../elements/Title";
import Img from "../assets/elegir.png";
import VerticalImg from "../assets/linea_vertical.png";
import FadeRightButton from "../elements/FadeRightButton";

const Elegir = () => {
    return ( 
        <Container>
            <Content>
                <Title>¿Por qué elegir Confiabogado?</Title>
                <Razones>
                    <ImgContainer/>
                    <TextContainer>
                        <Div>
                            <VerticalImgContainer/>
                            <Ul>
                                <li>Resuelve tu divorcio <b>rápido, fácil y bajo tus términos</b></li>   
                                <li>Ten <b>asesoría legal gratis</b></li>
                                <li>Seguridad al <b>100% de que te divorciamos</b></li>
                                <li>Consigue los <b>mejores precios y paga a meses</b></li>
                            </Ul>
                        </Div>
                        <ButtonContainer>
                            <FadeRightButton>QUIERO UNA ASESORÍA LEGAL</FadeRightButton>
                        </ButtonContainer>
                    </TextContainer>
                </Razones>
            </Content>
        </Container>
        
    );
}
const Container = styled.div`
    font-family: ${theme.primaryFont};
    font-size: ${theme.textFontSize};
    color: #2c3e50;
    background: #E8EEF1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    height: 671px;
    
    @media (max-width: 767px) {
        height: fit-content;
        padding-bottom: 30px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1140px;
    height: 571px;
    padding: 10px;
    align-items: center;
    
    @media (max-width: 767px) {
        height: fit-content;
        width: 90%;
        text-align: center;
    }
`;

const Razones = styled.div`
    display: flex;
    padding-top: 30px;
    
    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ImgContainer = styled.div`
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-position: center top;
    width: 560px;
    padding-left: 10px;
    height: 483px;
    
    @media (max-width: 767px) {
        width: 70vw;
        height: 200px;
        background-size: contain;
        
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;;
    width: 560px;
    padding-left: 10px;
    
    @media (max-width: 767px) {
        align-items: center;
        width: 100%;
    }
`;

const Div = styled.div`
    display: flex;
    padding-bottom: 50px;
    
    @media (max-width: 767px) {
        align-items: center;
        padding: 20px 0;
        width: 100%;
        justify-content: space-evenly;
    }
`;

const ButtonContainer = styled.div`
    padding: 0 50px;
`;

const VerticalImgContainer = styled.div`
    background-image: url(${VerticalImg});
    background-repeat: no-repeat;
    background-position: center top;
    width: 56px;
    height: 300px;
`;

const Ul = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li{
        width: 305px;
        line-height: 1.4;
        
    
        @media (max-width: 767px) {
            width: 50vw;
            padding: 10px 0;
        }
    }
    
    
    @media (max-width: 767px) {
        width: 30vw;
        align-items: center;
    }
`;

export default Elegir;