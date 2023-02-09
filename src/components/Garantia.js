import React from "react";
import styled from "styled-components";
import theme from "../data/theme";
import ImgGarantia from "../assets/garantia.png";

const Garantia = () => {
    return ( 
        <Container>
            <ImgContainer>
                <img src={ImgGarantia} alt="Respaldado por garantía de felicidad" />
            </ImgContainer>
            <h2>GARANTÍA DE FELICIDAD AL 100%</h2>
            <p>Cuando decimos que somos diferentes, lo decimos en serio. Te acompañamos en todo momento</p>
        </Container>
    );
}

const Container = styled.div`
    font-family: ${theme.primaryFont};
    font-size: ${theme.textFontSize};
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    height: 366px;
    min-height: fit-content;
    text-align: center;

    @media (max-width: 767px) {
        height: 500px;
    }

    
    h2 {
        font-family: ${theme.primaryFont};
        font-size: 29px;
        line-height: 1;
        color: ${theme.primaryColor};
    }
    
    p {
        margin: 10px;
    }
    `;

const ImgContainer = styled.div`
    display: flex;
    img {
        max-width: 100%;
    }
`;
 
export default Garantia;